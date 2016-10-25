require 'spec_helper'

PLUGIN_TYPES = %w{
  copy-and-paste command
} << nil

required_fields = %w{
  title description author git repository
}

describe("plugin manifests") do
  Dir["_plugins/*"].each do |plugin|
    plugin_info = SafeYAML.load_file(plugin)

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
    end

  end
end
