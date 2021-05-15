function buildHeader(info) {
    return `
        <div class="col-12">
            <h5 class="text-capitalize">Browser: ${info.browser}</h5>
            <p class="text-capitalize"><small>Scenario: ${info.folder}</small></p>
        </div>
    `;
}

function buildComparison(comparisons) {
    return comparisons.map(info => {
        return `
            <div class="row row-cols-12 mt-3">   
                <p class="text-capitalize m-0">Step: ${info.step}</p>
                <pre class="json-renderer m-0">${JSON.stringify(info)}</pre>
            </div>
            <div class="row text-center">
                <div class="col-4">
                    <small>Reference v3.3</small>
                    <img src="${info.after}" class="img-fluid img-thumbnail" label="Reference">
                </div>
                <div class="col-4">
                    <small>Test v3.42</small>
                    <img src="${info.before}" class="img-fluid img-thumbnail" label="Test">
                </div>
                <div class="col-4">
                    <small>Diff</small>
                    <img src="${info.diff}" class="img-fluid img-thumbnail" label="Diff">
                </div>
            </div>
        `;
    }).join('');
}

function bodyGenerator(totalInfo) {
    let body = []
    for (const [_, info] of Object.entries(totalInfo)) {
        body.push(`
            <div class="row border-top mt-3">
                ${buildHeader(info[0])}
            </div>
            ${buildComparison(info)}   
        `);
    }

    return body.join('');
}

module.exports.createReport = (dateTime, result) => {
    return `
    <html>
        <head>
            <title> VRT Report </title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
            <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
            <script src="https://rawgit.com/abodelot/jquery.json-viewer/master/json-viewer/jquery.json-viewer.js"></script>
            <link href="https://rawgit.com/abodelot/jquery.json-viewer/master/json-viewer/jquery.json-viewer.css" type="text/css" rel="stylesheet">
        </head>
        <body>
            <div class="container-fluid py-5 px-4">
                <div class="row">
                    <div class="col-12">
                        <h1>Report for Ghost</h1>
                    </div>
                    <div class="col-12">
                        <h6>Executed: ${dateTime}</h6>
                    </div>
                </div>
                ${bodyGenerator(result)}
            </div>
            <script>
                var $divCode = Object.values($('.json-renderer'));
                $divCode.forEach(elem => {
                    var $elem = $(elem);
                    $elem.jsonViewer(JSON.parse($elem.text()), {collapsed: true});
                });
            </script>
        </body>
    </html>`;
};
