---
title: AppKit - An App Framework for Web Components
description: AppKit lays the groundwork for integrating web components as apps in your ui
url: /docs/introduction
contributors:
  - michaelkrog
---

# AppKit: An App Framework Web Components

AppKit is a framework that defines a standard for communication between Web Components (more specifically, Custom Elements) and allows for deep integration in your Web UI. AppKit combines the best concepts of Mobile Apps with Web Components into a simple tiny framework-agnostic library.

AppKit takes features such as

- Content provision (inspired by Android)
- App Extensions (inspired by iOS)
- Sandboxing
- App bundling

and then facilitates that for standards-based Web Components so you can build a rock solid Web UI consisting of many apps that works together.

AppKit is framework-agnostic and can work with many popular frameworks right out of the box - or without a framework if that is your preference. 

Compared to using We Components, AppKit provides the layer you needs too facilitate a standardized communication between components and your UI in a simple manner. Allowing components to retrieve content via the builtin Content provision, makes it easy for 3rd party developers to work with data in your system without the need to know advanced internal details about your system.


## Why AppKit?

Stencil was created by the [Apaq](http://ionicframework.com/) team to help build faster, more capable Web UI's that worked across all major frameworks. The need grew out of their development of [Previsto's](http://previsto.com/) user interface.

While Ionic primarily targeted Cordova apps, the emergence of Progressive Web Apps as a rapidly growing target for web developers demanded a different approach to web app development performance. With Ionic's classic use of traditional frameworks and bundling techniques, the team was struggling to meet latency and code size demands for Progressive Web Apps that ran equally well on fast and slow networks, across a diversity of platforms and devices.

Additionally, framework fragmentation had created a web development interoperability nightmare, where components built for one framework didn't work with another framework.

Web Components offered a solution to both problems, pushing more work to the browser for better performance, and targeting a standards-based component model that all frameworks could use.

However, Web Components by themselves weren't enough. Building fast web apps required innovations that were previously locked up inside of traditional web frameworks. Stencil was built to pull these features out of traditional frameworks and bring them to the fast emerging Web Component standard.
