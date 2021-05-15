const { 
    readFileSync, 
    writeFileSync, 
    readdirSync, 
    existsSync 
} = require('fs');

const groupBy = require('lodash/groupBy');
const compareImages = require('resemblejs/compareImages');

const scenarios = [
    'escenario_de_pruebas_1',
    'escenario_de_pruebas_2',
    'escenario_de_pruebas_3',
    'escenario_de_pruebas_4',
    'escenario_de_pruebas_5'
];

function responseFormatter(resultInfo) {
    return groupBy(resultInfo, info => {
        return info.browser + info.folder;
    });
}

module.exports.compareScreenshots = async () => {
    let resultInfo = [];
    let browsers = readdirSync(options.assets);
    for await (browser of browsers) {
        for await (folder of scenarios) {
            if (!existsSync(`${options.assets}/${browser}/${folder}`)) {
                continue;
            }
            let files = readdirSync(`${options.assets}/${browser}/${folder}`).filter(file => /step\d+-\D+/g.test(file));
            let pairs = new Array(files.length / 2).fill(null);
            await pairs.forEach(async (_, i) => {
                const data = await compareImages(
                    readFileSync(`${options.assets}/${browser}/${folder}/step${i + 1}-after.png`),
                    readFileSync(`${options.assets}/${browser}/${folder}/step${i + 1}-before.png`),
                    options
                );
                writeFileSync(`${options.assets}/${browser}/${folder}/diff${i + 1}.png`, data.getBuffer());
                resultInfo.push({
                    browser,
                    folder: folder.split('_').join(' '),
                    step: i + 1,
                    after: `.${options.assets}/${browser}/${folder}/step${i + 1}-after.png`,
                    before: `.${options.assets}/${browser}/${folder}/step${i + 1}-before.png`,
                    diff: `.${options.assets}/${browser}/${folder}/diff${i + 1}.png`,
                    isSameDimensions: data.isSameDimensions,
                    dimensionDifference: data.dimensionDifference,
                    rawMisMatchPercentage: data.rawMisMatchPercentage,
                    misMatchPercentage: data.misMatchPercentage,
                    diffBounds: data.diffBounds,
                    analysisTime: data.analysisTime
                });
            });  
        }
    }

    return responseFormatter(resultInfo);
};