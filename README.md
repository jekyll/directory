jekyllrb.com/plugins/
====================

Plugins discovery for Jekyll, built with Jekyll – A proposal.

# NOTE: This is just a proposal and does not represent any functionality of Jekyll at present.

## Adding your plugin

1. Fork the repository
2. Create a feature branch like `my-cool-plugin`
3. Add a new file in `_posts` with today's date and the name of your plugin as the slug (e.g. `2013-07-19-my-cool-plugin.markdown`)
4. Add plugin info in YAML front-matter:

    ```yaml
    ---
    layout: plugin
    title: My-Cool-Plugin
    description: I make jekyll cooler, yo.
    author: mygithubusername
    git: git://github.com/clone/url/for/my/project.git
    repository: https://github.com/ericdfields/Jekyll-Dribbble-Set-Tag
    ---
    ```

5. Save and submit a PR to this repo

Your plugin will be added to the site once your pull-request has been merged.

## Plugins Are Gems

In an effort to make versioning and distribution as simple as possible,
your Ruby-based plugin should be distributed as a gem. This project hopes
to make the _plugins folder somewhat obsolete, as Jekyll will simply autoload
your plugin.
