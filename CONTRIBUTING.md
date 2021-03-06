# Contributing

Thanks for your interest in contributing to the Appkit Docs! :tada:


## Creating an Issue

* It is required that you clearly describe the steps necessary to reproduce the issue you are running into. Although we would love to help our users as much as possible, diagnosing issues without clear reproduction steps is extremely time-consuming and simply not sustainable.

* The issue list of this repository is exclusively for bug reports, docs issues and feature requests. Non-conforming issues will be closed immediately.

* Issues with no clear steps to reproduce will not be triaged. If an issue is labeled with "needs reply" and receives no further replies from the author of the issue for more than 5 days, it will be closed.

* If you think you have found a bug, or have a new feature idea, please start by making sure it hasn't already been [reported](https://github.com/apaq/appkit/issues?utf8=%E2%9C%93&q=is%3Aissue). You can search through existing issues to see if there is a similar one reported. Include closed issues as it may have been closed with a solution.

* Next, [create a new issue](https://github.com/apaq/appkit-site/issues/new) that thoroughly explains the problem.

## Creating a Pull Request

* We appreciate you taking the time to contribute! Before submitting a pull request, we ask that you please [create an issue](#creating-an-issue) that explains the bug, docs issue, or feature request and let us know that you plan on creating a pull request for it. If an issue already exists, please comment on that issue letting us know you would like to submit a pull request for it. This helps us to keep track of the pull request and make sure there isn't duplicated effort.

* Looking for an issue to fix? Make sure to look through our issues with the [help wanted](https://github.com/apaq/appkit-site/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22) label!

### Setup

1. Fork the repo.
2. Clone your fork.
3. Make a branch for your change.
4. Run `npm install` (make sure you have [node](https://nodejs.org/en/) and [npm](http://blog.npmjs.org/post/85484771375/how-to-install-npm) installed first).
5. Run `npm run docs` to build the documentation files.
6. Run `npm start`.

#### Adding Documentation

1. To add documentation first create a new markdown file in `docs` in the folder that fits your doc best. For example, if your doc is a guide, you would put it in `docs/guides`.
2. Write your documentation following the style in the other docs markdown files. Try to aim for being as clear and concise as possible. We recommend checking out the [vue.js docs](https://vuejs.org/) for examples of good docs.
3. Make sure the page header contains title, description, url and contributors. See other docs files for examples.
4. Add your page to `src/docs/README.md` to have it appear in the table of contents.
5. Run `npm run site.structure` then start the app with `npm start`. You should see your new page in the table of contents and be able to access it.

#### Modifying documentation

1. Locate the doc you want to modify in `docs/`.
2. Modify the documentation, making sure to keep the format the same as the rest of the doc.
3. Run `npm run docs` then `npm start` to make sure your changes look correct.

Alternatively, modify documentation through the GitHub interface.

## Commit Message Format

We have very precise rules over how our git commit messages should be formatted. This leads to readable messages that are easy to follow when looking through the project history.

`type(scope): subject`

#### Type
Should be `docs`

#### Scope
The scope can be anything specifying the place of the commit change. For example `router`, `prerendering`, etc. If you make multiple commits for the same doc, please keep the naming of this doc consistent. For example, if you make a change to the router docs and the first commit is `docs(router)`, you should continue to use `router` for any more commits related to navigation.

#### Subject
The subject contains a succinct description of the change:

* use the imperative, present tense: "change" not "changed" nor "changes"
* do not capitalize first letter
* do not place a period `.` at the end
* entire length of the commit message must not go over 50 characters
* describe what the commit does, not what issue it relates to or fixes
* **be brief, yet descriptive** - we should have a good understanding of what the commit does by reading the subject


## License

By contributing your code to the apaq/appkit-site GitHub Repository, you agree to license your contribution under the MIT license.
