---
title: My First App
description: My First App
url: /docs/my-first-app
contributors:
  - michaelkrog
---

# My First App

In order to simplify the creation of a project that can generate a Web Component, this 
guide will make use of [Stencil](https://stenciljs.com). Stencil offers an easy to use CLI
for creating and building Web Components and applications.

## Create project

To get started run the following command to generate a project.

```bash
 npm init stencil
```

Stencil can be used to create both Web Components, or entire apps. For this guide we want to 
create a Web Component. After running init you will be provided with a prompt so that 
you can choose the type of project to start. Choose "component" and name your project 
"my-first-app".

```bash
? Pick a starter › - Use arrow-keys. Return to submit.

   ionic-pwa     Everything you need to build fast, production ready PWAs
   app           Minimal starter for building a Stencil app or website
❯  component     Collection of web components that can be used anywhere
```

Now enter your new project and install the needed packages.

```bash
cd my-first-app
npm install
```

## Install AppKit

Next step is to install AppKit which is very easy using npm. You simply run the following command.

```bash
npm i @appkit/core
```

## Use AppKit

Let's use AppKit in the component that was already created when the project was initialized. In 
`src/components` you will see a folder called `my-component`. Open the file `my-component.tsx`. Here 
you have a very simple Stencil component written with [JSX](https://facebook.github.io/react/docs/introducing-jsx.html) and TypeScript
and which can be compiled to a Web Component using Stencil. Follow along and we'll show you how later on.

Your component code should look similar to this:

```tsx
import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  ... // Removed for the sake of brevity 
}
```

Lets us do 2 things now:
1. Import AppKit
2. Register your component as an App.

```tsx
import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';
import { Context } from '@appkit/core'; // <- Import Context type

declare function createAppContext(el: HTMLElement): Context; // <- Declare to typescript that createAppContext function exists

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  @Element() el: HTMLElement; // <- Get reference to your Web Components host element
  context: Context; // <- Declare context variable
  
  componentWillLoad() {
    this.context = createAppContext(this.el); // <- Create context
  }

  ... // Removed for the sake of brevity 
}
```

## So what is really going on here?

Let's dive in.

The first new thing we see is the `import { Context, IData } from '@appkit/core'; `. 
This ensures that we can use the interface type for `Context` from AppKit.

Below that, we `declare` a function, namely `createAppContext(el: HTMLElement): Context;`
This function will always be avaiable when your component is executed in an AppKit environment.

Next thing is that we declare `context: Context;` to be able to hold the context we are going to create.
We are not really gonna use this context in this guide, but later on when you want to communicate with 
other Apps or retrieve content, you will need this.

Last thing is where the actions really happens. When the component initializes for the first time we create a 
context by calling `createAppContext(this.el);`. This ensures that the components registers itself as running 
App and has access to everything available to your App through this context.

You have now created your first App.

*Remember:* If you prefer other frameworks(React, Angular, Vue, Ember, etc.) or VanillaJS the procedure is very 
similar. You can expect the `createAppContext(el: HTMLElement): Context;` function to be a global function when 
your component initializes.

## Lets get some content

You have your first App. Now lets get some content from the system that system that will embed your App. In order 
to do that we are gonna expand the `componentWillLoad` function a bit in order to get more out of the context as 
soon as we have it.

```tsx
  componentWillLoad() {
    this.context = createAppContext(this.el);

    const uri = 'content://test'
    const client = this.context.getContentResolver().resolve<string, string>(uri);
    const pi = await client.get('pi');

    this.first = 'Chuck';
    this.middle = pi;
    this.last = 'Norris';
  }
```

So what is going on here? First were are defining a content `uri` which are explained in details on the page 
(insert page). In this example we are using some test content that is always available to any Apps. We use that URI
for resolving a `client` that can read the data. Last but not least we do the actual data read from the client, which
in this test is `pi`.

So it is a 3-step process here:
1. Define what to read
2. Get a client that can read that
3. Read the data.

Last but not least we use the read data in the component.

## Listen for requests from other Apps

## Component Generator

The Stencil CLI can generate new components for you. If you used one of the starters, you can simply run the `generate` npm script in your project, which will start the interactive generator.

```shell
npm run generate
```

Or you can invoke the Stencil CLI directly with the `generate` command (`g` for short). If you don't have `stencil` installed globally, prefix the command with `npx`.

```shell
stencil generate
```

You can optionally pass the component tag name directly to the command. Remember that the component tag name needs to be lowercase and contain at least one hyphen. In the second step, the generator will ask you which files to generate. This allows you to bootstrap a stylesheet as well as spec and e2e tests along with the component file.

All components will be generated within the `src/components` folder. Within that, a folder will be created with the same name as the component tag name you provided, and within that folder the files will be generated. It is also possible to specify one or multiple sub-folders to generate the component in.

For example, if you specify `pages/page-home` as the component tag name, the files will be generated in `src/components/pages/page-home`.

```shell
stencil generate pages/page-home
```

```plain
src
 |- components
     |- pages
         |- page-home
             |- page-home.css
             |- page-home.e2e.ts
             |- page-home.spec.ts
             |- page-home.tsx
```
