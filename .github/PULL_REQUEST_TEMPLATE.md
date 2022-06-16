## Description

**Task:** https://github.com/microverseinc/curriculum-javascript/blob/main/todo-list/m1_list_structure.md

This PR makes the following changes:
-  Sets up the GitHub Actions and the [Webhint](https://webhint.io/), [Stylelint](https://stylelint.io/), and [ESLint](https://eslint.org/) linters
-  Sets up the Webpack configuration files and build scripts

Plus, it adopts the following methodologies and conventions:
- For the CSS/Sass:
  - [BEM](https://en.bem.info/methodology/) methodology for naming the CSS classes
  - A modified version of the [Scalable and Modular Architecture for CSS](http://smacss.com/) (SMACSS) methodology for organizing the CSS code into categorized folders/files (base, components, layout, and utilities)
  - [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) methodology for breaking down the CSS components into atoms, molecules, and organisms
- For the JavaScript:
  - [MVC architecture](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) to separate the application business logic from the presentation logic (DOM manipulation tasks)

## Type of change

- [ ] Bug fix (non-breaking change which fixes an issue)
- [X] New feature (non-breaking change which adds functionality)
- [X] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] This change requires a documentation update

## Checklist:

- [X] My code follows the style guidelines of this project (no linters errors)
- [X] I have checked my code and corrected any misspellings
- [X] I have commented my code
- [X] I have deleted any unused code as comments in my codebase

## Screenshots

![todo-structure](https://user-images.githubusercontent.com/64566209/171706005-2b9223e1-f04c-499d-b9d1-277c4903287e.png)
