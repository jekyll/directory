require "yaml"

Dir["_posts/*.markdown"].each do |f|
  metadata = YAML.load_file(f)
  metadata["repository"] = metadata["git"].gsub("git://", "git@").gsub(":", "/").gsub("@", "://").gsub("git://github.com", "https://github.com").gsub(/\.git/, "")
  File.open(f, "wb") do |j|
    j.write(YAML::dump(metadata))
    j.puts("---")
  end
end
