ENV['RAILS_ENV'] = 'test'
require './config/environment'

require 'rspec'
require 'rspec-rails'
require 'factory_girl'

FactoryGirl.find_definitions

require 'database_cleaner'
DatabaseCleaner.strategy = :truncation

Spinach.hooks.before_scenario do
  DatabaseCleaner.clean
  ActionMailer::Base.deliveries = []
end

Spinach.config.save_and_open_page_on_failure = false

Spinach::FeatureSteps.send(:include, RSpec::Matchers)
