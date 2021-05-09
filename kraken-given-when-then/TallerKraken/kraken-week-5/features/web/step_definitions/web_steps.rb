require 'kraken-mobile/steps/web/kraken_steps'
Then(/^I click on element to list post "(.*?)"$/) do |selector|
  @driver.find_element(:xpath, '//a[href=\'#/posts/\']').click
  sleep 2
end
