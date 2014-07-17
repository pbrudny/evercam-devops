source 'https://rubygems.org'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 4.1.0'

gem 'pg'

# Use SCSS for stylesheets
gem 'sass-rails', '~> 4.0.0'
gem 'yui-compressor'

# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'

# Use CoffeeScript for .js.coffee assets and views
gem 'coffee-rails', '~> 4.0.0'

# Use jquery as the JavaScript library
gem 'jquery-rails'

# Turbolinks makes following links in your web application faster. Read more: https://github.com/rails/turbolinks
gem 'turbolinks'
gem 'jquery-turbolinks'

# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 1.2'

group :doc do
  # bundle exec rake doc:rails generates the API under doc/api.
  gem 'sdoc', require: false
end

gem 'bcrypt', '~> 3.1.2'
gem 'protected_attributes'
gem 'rack-rewrite'
gem 'sequel', '= 4.10.0'
gem 'typhoeus'
gem 'unicorn'
gem 'data_uri'
gem 'geocoder'
gem 'newrelic_rpm'
gem 'heroku-deflater'
gem 'memcachier'
gem 'dalli'

gem 'rails_12factor', group: :production
gem 'intercom-rails', '~> 0.2.24'

gem 'airbrake'

gem 'rails_admin', :git => 'git://github.com/sferik/rails_admin.git'

gem 'devise'

group :evercam do
  gem 'evercam_misc', '~> 0.0'
  gem 'evercam_models', '~> 0.2.0'
end
gem 'evercam', '~> 0.2.0'

group :development do
  gem 'quiet_assets'
  gem 'spring'
  gem 'rails-footnotes', '>= 4.0.0', '<5'
  gem 'jazz_hands', github: 'nixme/jazz_hands', branch: 'bring-your-own-debugger'
  gem 'pry-byebug'
end

group :test do
  gem 'database_cleaner', git: 'git@github.com:bmabey/database_cleaner.git'
  gem 'factory_girl'
  gem 'rspec-rails', '= 3.0.0.beta2'
  gem 'vcr'
  gem 'webmock', '~> 1.17'
  gem 'capybara'
  gem 'simplecov'
  gem 'rack_session_access'
  gem 'selenium-webdriver'
  gem 'launchy'
end

ruby '2.1.2'
