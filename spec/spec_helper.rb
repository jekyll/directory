# frozen_string_literal: true

require "gems"
require "rspec/expectations"
require "safe_yaml"

RSpec::Matchers.define :be_avaliable_on_rubygems do
  match do |actual|
    begin
      Gems.info actual
      true
    rescue StandardError
      false
    end
  end
  description do
    "be a gem avaliable on RubyGems.org"
  end
  failure_message do |actual|
    %(could not find "#{actual}" on RubyGems.org)
  end
end

RSpec.configure do |config|
  config.run_all_when_everything_filtered = true
  config.filter_run :focus

  # Run specs in random order to surface order dependencies. If you find an
  # order dependency and want to debug it, you can fix the order by providing
  # the seed, which is printed after each run.
  #     --seed 1234
  config.order = "random"
end
