---
title: AppKit Browser Support
description: Out-of-the-box browser support provided by AppKit.
url: /docs/browser-support
contributors:
  - michaelkrog
---

# Browser Support

AppKit support all major desktop and mobile browsers.

<div class="bs-chart">
  <div class="bs-chart__group">
    <div class="bs-chart__cards">
      <div class="bs-chart__card">
        <app-icon name="checkmark"></app-icon>
        Chrome 60+
      </div>
      <div class="bs-chart__card">
        <app-icon name="checkmark"></app-icon>
        Safari 10.1+
      </div>
      <div class="bs-chart__card">
        <app-icon name="checkmark"></app-icon>
        Firefox 63+
      </div>
      <div class="bs-chart__card">
        <app-icon name="checkmark"></app-icon>
        Edge 79+
      </div>
    </div>
    <div class="bs-chart__group-label">
      Full native support
    </div>
  </div>
</div>

Bear in mind that AppKit is based on Web Components, a set of standardized browser APIs centered around the Custom Elements v1 spec, a cross-browser way to define and create essentially new HTML tags, and which is the successor to the now-defunct v0 spec.

Custom Elements are natively supported in Chrome, Firefox, Safari (including iOS)! and Edge.

|                                                                | Chrome 60+                             | Safari 10.1+                           | Firefox 63+                            | Edge 79+                               |
| -------------------------------------------------------------- | :------------------------------------: | :------------------------------------: | :------------------------------------: | :------------------------------------: |
| [CSS Variables](https://caniuse.com/#feat=css-variables)       | <app-icon name="checkmark"></app-icon> | <app-icon name="checkmark"></app-icon> | <app-icon name="checkmark"></app-icon> | <app-icon name="checkmark"></app-icon> |
| [Custom Elements](https://caniuse.com/#feat=custom-elementsv1) | <app-icon name="checkmark"></app-icon> | <app-icon name="checkmark"></app-icon> | <app-icon name="checkmark"></app-icon> | <app-icon name="checkmark"></app-icon> |
| [Shadow Dom](https://caniuse.com/#feat=shadowdomv1)            | <app-icon name="checkmark"></app-icon> | <app-icon name="checkmark"></app-icon> | <app-icon name="checkmark"></app-icon> | <app-icon name="checkmark"></app-icon> |
| [es2017](https://caniuse.com/#feat=async-functions)            | <app-icon name="checkmark"></app-icon> | <app-icon name="checkmark"></app-icon> | <app-icon name="checkmark"></app-icon> | <app-icon name="checkmark"></app-icon> |
| [ES Modules](https://caniuse.com/#feat=es6-module)             | <app-icon name="checkmark"></app-icon> | <app-icon name="checkmark"></app-icon> | <app-icon name="checkmark"></app-icon> | <app-icon name="checkmark"></app-icon> |



<style>
  .bs-chart,
.bs-chart__cards,
.bs-chart__card {
  display: flex;
}

.bs-chart {
  margin: 40px 0;
  justify-content: space-between;
}

.bs-chart__group + .bs-chart__group,
.bs-chart__card + .bs-chart__card {
  margin-left: 8px;
}

.bs-chart__group:first-child .bs-chart__card {
  background: #39B54A;
}

.bs-chart__group:last-child .bs-chart__card {
  background: #96D01A;
}

.bs-chart__card {
  width: 110px;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  color: #fff;
  padding: 8px;
  font-size: 11px;
  font-weight: 600;
}

.bs-chart__card app-icon {
  background: rgba(255, 255, 255, 0.15);
  padding: 8px;
  border-radius: 100px;
  margin: 6px 0 8px;
}

.bs-chart__card app-icon svg {
  fill: #fff;
}

.bs-chart__group-label {
  display: block;
  text-align: center;
  font-size: 11px;
  color: #646464;
  margin-top: 6px;
}

@media screen and (max-width: 872px) {
  .bs-chart__card {
    width: 100%;
  }

  .bs-chart,
  .bs-chart__group,
  .bs-chart__cards {
    flex-direction: column;
  }

  .bs-chart__group + .bs-chart__group {
    margin-left: 0;
    margin-top: 20px;
  }

  .bs-chart__card + .bs-chart__card {
    margin-left: 0;
    margin-top: 8px;
  }
}
</style>