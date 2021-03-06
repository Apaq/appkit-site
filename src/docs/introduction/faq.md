---
title: Appkit Frequently Asked Questions
description: Appkit is a developer-focused toolchain for building reusable, scalable component libraries, applications and design systems.
url: /docs/faq
contributors:
  - michaelkrog
---

# FAQ

## Introduction

### What is Appkit?

Appkit is a developer-focused library for building reusable, scalable and integratable Apps using the Web Components standard. It provides a layer between your application and Web Components that creates a uniform communication between them, and combines the best concepts of mobile Apps with the web in a tiny library.

Appkit focuses on web standards. It’s [100% free and MIT open source](https://github.com/apaq/appkit/blob/master/LICENSE.md).


### What does Appkit do?

Appkit helps developers and teams build and share custom components as integratable Apps. Since Appkit is based on standards-compliant Web Components and has no dependencies itself, the Apps you build with Appkit will work with many popular frameworks right out of the box, and can even be used without a framework because they are just Web Components. Appkit also enables a number of key capabilities on top of Web Components, in particular, extensions for deep integration, content provisioning, sandboxing and more.


### Who is Appkit for?

Appkit is for developers and teams that want to build integratable Apps that can be shared across teams, frameworks and large organizations.


### Who makes Appkit?

Appkit is an open source project started by the [Apaq](https://github.com/apaq) team, with contributions also coming from the community.


### Why was Appkit created?

Appkit was created for [Previsto](https://previsto.com/) by the [Apaq](https://github.com/apaq) team to make our own UI more maintainable, flexible, performant and to allow for 3rd party apps developed with any major framework. Web Components offered a solution by pushing more work to the browser for better performance, and targeting a standards-based component model that all frameworks could use. But we still needed a way to uniform the communication between the UI and the Apps and to let the Apps retreive content from our system. We also neede a way to sandbox 3rd party Apps so they would'nt become a security threat.

Appkit does all that for us.


### Who uses Appkit?

Appkit was initially developed for Previsto and has been a very successful library for delivering Web Components as Apps. But Appkit is for anyone. Any individual, any team, any organization. It is for anyone that
needs a way to develop and share Apps based on Web Components in a uniform and secure manner.


### Why is Appkit considered framework agnostic?

Well, Appkit has no dependencies and is based on the Web Component standard. Perhaps the most appealing benefit of Web Components is that they give your development teams the flexibility to choose the underlying tools and frameworks - and versions of those frameworks - and tools that they prefer. With Web Components, each team can use what works best for them, giving them complete freedom to use the tools they love—today and tomorrow.


## What does Appkit provide?

### Is Appkit a framework?

Appkit purposely does not strive to act as a framework, but rather a small library which allows developers to scale framework-agnostic Apps across many projects, teams and large organizations. 


## Technology


### Why does Appkit use web components?

By using a consistent set of web standards, Web Components do not depend on a specific framework runtime to execute. As frameworks change their APIs, Web Components do not, allowing for the original source to continue to work natively in a browser.

By choosing Web Components, you help to insulate yourself from the threat of tech churn.


### What dependencies does the Appkit have?

None. 


### Can data be passed to Apps?

Yes. Appkit has a communication system inspired by [how Intents work in Android](https://developer.android.com/guide/components/intents-filters). It lets a developer form an object of data details to send to an App. The data object contains details that the App can use to retrieve the data. If the data resides the application integrating the App, data can be retrieved via Appkit content provisioning.

### Can Apps be deeply integrated?

Yes. Appkit has an extension system inspired by [how extensions work in Mac OS](https://developer.apple.com/design/human-interface-guidelines/macos/extensions/share-extensions/). It lets any App register extensions that a UI can use to make integration of Apps in very custom ways.

### Can the Apps retrieve data in a standardized manner?

Yes. When an App is initialized it gets access to content provisioning. Any type of data that has been provided through that will be available to the App in a simple but secure manner. 

### What technology is Appkit built with?

The Appkit library is built with TypeScript and is [distributed on npm](https://www.npmjs.com/package/@appkit/core). Its distribution includes types, making it easier for developers to use Appkit APIs.


## Capabilities

### Where can Apps built with Appkit be used?

One great advantage of Appkit being based on Web Components is that your App will work across all projects. 

For example, an organization with multiple products with each their UI but works with some of the same data, Appkit can help share and integrate Web Components deeply into those UI's.


### What features does Appkit add to Web Components?

In short:
- Content provision (inspired by Android)
- App Extensions (inspired by Mac OS)
- Sandboxing
- App bundling


### What browsers can support Appkit?

Appkit works on all major modern browsers.

[Learn more about browser support](/docs/browser-support).


## Appkit Project

### How do I get involved?

Appkit is an open source project, and we encourage you to contribute. You can start by creating issues on GitHub, submitting feature requests, and helping to replicate bugs. If you’re interested in contributing, please see our [Contributor Guide](https://github.com/apaq/appkit/blob/master/.github/CONTRIBUTING.md) and check out our [issue tracker](https://github.com/apaq/appkit/issues).


### Is Appkit open source?

Yes, Appkit is open source and its source code can be [found on GitHub](https://github.com/apaq/appkit). Contributions are welcomed from the community.


### Which software license does Stencil use?

Appkit’s software [license is MIT](https://github.com/apaq/appkit/blob/master/LICENSE).


### Who works on Appkit?

The majority of the development is done by engineers at [Apaq](https://github.com/apaq). If you’re excited about Appkit, we encourage you to join the community and contribute! 

