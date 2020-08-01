---
title: About
---

## Intro

Welcome! We are a few [open source sanskrit programmers](https://groups.google.com/forum/#!forum/sanskrit-programmers).

## Contributing
### Technical considerations
- github.io is a convenient place to present the data (no money needed for server resources).
- The Jekyll static site generator is just too slow for data of this magnitude.
- Content is loaded from github.

### Running off internet
- clone the data repository within static subdirectory and point the attributes in the js_include tags in the details page to point to it.
- Fix the variables in the hugo config.toml file appropriately.