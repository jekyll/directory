jekyllrb.com/directory/
====================

Plugins and themes discovery for Jekyll, built with Jekyll – A proposal.

[![Build Status](https://travis-ci.org/jekyll/plugins.svg?branch=master)](https://travis-ci.org/jekyll/plugins)

## NOTE: This is just a proposal and does not represent any functionality of Jekyll at present.

## Adding your plugin or your theme

1. Fork the repository
2. Create a feature branch like `my-cool-plugin`
3. Add a new file in `_plugins` or `_themes` with the name of your plugin as the slug (e.g. `my-cool-plugin.markdown`)
4. Add plugin or theme info in YAML front-matter:

    ```yaml
    ---
    title: My-Cool-Plugin
    description: >
      I make jekyll cooler, yo. [Check this demo](http://demo.example.com)
    author: mygithubusername
    git: git://github.com/clone/url/for/my/project.git
    repository: https://github.com/ericdfields/Jekyll-Dribbble-Set-Tag
    ---
    ```

5. Save and submit a PR to this repo

Your plugin/theme will be added to the site once your pull-request has been merged.

## Plugins are Gems

In an effort to make versioning and distribution as simple as possible,
your Ruby-based plugin should be distributed as a gem. This project hopes to make the `_plugins` folder somewhat obsolete, as Jekyll will simply autoload your plugin.

## Themes are gems

You are encouraged to package your themes as RubyGems, to make it easier for users to install and to be able to benefit from updates. Jekyll provides a `jekyll new-theme` command to help you get started since v3.2.
