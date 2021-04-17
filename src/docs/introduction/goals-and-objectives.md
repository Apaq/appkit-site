---
title: Appkit Goals and Objectives
description: Appkit aims to combine the best concepts of Mobile Apps with Web Components into a simple tiny framework-agnostic library.
url: /docs/goals-and-objectives
contributors:
  - michaelkrog
---

# Appkit Goals And Objectives

Appkit aims to combine the best concepts of Mobile Apps with Web Components into a simple tiny framework-agnostic library. It's important to stress that Appkit's goal is to *not* become or be seen as a "framework", but rather our goal is to provide a library that facilitates support for Apps within your Web UI. In many cases, Appkit can be used to handle every view in your UI as an App, though using it as such is certainly not required.

## Built Upon Web Standards
Appkit loves and embraces Web Components because they work in any major framework or with no framework at all. Additionally, other standards heavily relied on include ES Modules and dynamic imports which have proven to replace traditional bundlers which add unnecessary complexities and run-time JavaScript. By using web-standards, developers can learn and adopt a standard API documented across the world.

## Security
Adding Web Components to your UI exposes a security threat. The Component has direct access to the DOM via Javascript and can you have no way to keep anything in the DOM out of it's reach. Appkit can Sandbox any App prepared with Appkit for you while still maintaning the ability to communicate with the Component and letting the Component retrieve Content if you let it.

## Future-Friendly
As the world of software development continues to evolve, so too can the library. Instead of requiring complete rewrites of components, Appkit will continue to based on the Web Component standard. Additionally, if something changes about any API, we will make sure those changes are always backwards compatible.

## Unified Content Provisioning
To ensure that developers can create Apps that can work with multiple UI's, we have a strong goal to unify the way content is provided to the Apps. The Api for all types of content is the same and standard mime-types define the type of data that is being provided. So if an App can work with content of type image/jpg (fx. an image editor) it will  be reusable in any UI's that provide content of type image/jpg. 

Additionally you can invent your own types and develop Apps that can handle that type of data. If you are developing one of many UI's within an organization you may share data types only known to your domain but still develop Apps with Appkit that can work with you data types and be reusable between multiple projects and teams.

## Tiny API
Appkit purposely does not come with a large custom API which needs to be learned and re-learned, but rather relies on web-standards or inspiration from Api's in Android and iOS. Again, our goal is to not create yet-another-framework, but rather provide a simple future-friendly library that makes use of standars already baked into the browser. The smaller the API, the easier to learn, and the less that can be broken.

## Wide Browser Support
For the small minority of browsers that do not support modern browser features and APIs, Appkit will automatically polyfill them on-demand. What this means is that for browsers that already support the feature natively, they will not have to download and parse any unnecessary JavaScript. The great news is that in today's web landscape, most modern APIs are already shipping for what Appkit requires. Out-of-the-box browser support includes Chrome, Firefox, Safari and Edge.
