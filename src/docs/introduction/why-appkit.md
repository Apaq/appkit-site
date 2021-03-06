---
title: Appkit - Makes Web Components integrate like Apps
description: Appkit lays the groundwork for integrating web components as apps in your ui
url: /docs/introduction
contributors:
  - michaelkrog
---

# Appkit: Makes Web Components integrate like Apps

Appkit adds profound app support in your web application including an app store if you like. Appkit is inspired by how apps, widgets etc. are build and interregates in iOS and Android. It lets you build and use apps, widgets and extensions in your web application and delivers a unified way of exposing data between those.

This opens up for the possibility of sharing UI components with others via a centralized app store as they will all build on the same foundation.

Appkit takes features such as

- Content provision (inspired by Android)
- App Extensions (inspired by Mac OS)
- Sandboxing
- App bundling

and then facilitates that for standards-based Web Components so you can build a rock solid Web UI consisting of many apps that works together.

Appkit is framework-agnostic and can work with many popular frameworks right out of the box - or without a framework if that is your preference. 

Compared to using plain Web Components, Appkit provides the layer you need to facilitate a standardized communication between components and your UI in a simple manner. Allowing components to retrieve content via the builtin Content provision, makes it easy for 3rd party developers to work with data in your system without the need to know advanced internal details about your system.


## Why Appkit?

Appkit was created by the [Previsto](http://previsto.com/) team to help build faster, more capable Web UI's that worked across all major frameworks. The need grew out of their development of [Previsto's](http://previsto.com/) user interface.

While Previsto originally targeted a small user base with a simple UI, the need grew for more and more functionality and support for apps delivered by 3rd party developers and it demanded a different approach to our (monolith) UI. With Previsto's approach to build everything with a specific framework and in one bundle, the team struggled to keep a lean codebase, support lazy loading of UI components while also letting the user install custom apps in the UI to fit their needs.

Additionally, the vendor lock-in to a single framework made it difficult to get 3rd party developers on board for developing apps for the Previsto UI. The team needed a solution that would let any developer create apps for Previsto using any framework they'd like.

Web Components offered a solution to the problem by targeting a standards-based component model that all frameworks could use.

However, Web Components by themselves weren't enough. While Web Components by themselves are standards-based, the communication with them and the ability for them to retreive data is not. Appkit was built to be the layer that lets your Web Components behave like Apps that communicate with each other, extract content via your UI and lets you integrate them deeply within your UI.
