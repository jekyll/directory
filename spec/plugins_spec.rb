# frozen_string_literal: true

require "spec_helper"

PLUGIN_TYPES = %w(
  copy-and-paste command
) << nil

required_fields = %w(
  title description author git repository
)

Dir["_plugins/*"].each do |plugin|
  plugin_info = SafeYAML.load_file(plugin)
  describe(plugin) do
    context File.basename(plugin, ".*") do
      required_fields.each do |field|
        it "contains the #{field}" do
          expect(plugin_info[field]).not_to be_nil
          expect(plugin_info[field]).not_to eql("")
        end
      end

      it "complies with the accepted types" do
        expect(PLUGIN_TYPES).to include(plugin_info["type"])
      end

      if plugin_info["type"].nil?
        it "is a gem" do
          expect(plugin_info["title"]).to be_avaliable_on_rubygems
        end
      end
    end
  end
end
