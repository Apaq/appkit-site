import { Component, State, h, Event, EventEmitter  } from '@stencil/core';

@Component({
  tag: 'announcement-bar',
  styleUrl: 'announcement-bar.css'
})
export class AnnouncementBar {
  @State() isModalOpen: boolean = false;
  @Event() toggleModal!: EventEmitter;

  render() {
    return ([
      <stencil-route-link url="/blog/appkit-site-launched" class="announcement">
        <strong class="announcement__pill">Blog</strong>
        Appkit Site Launched
        <app-icon name="arrow-right"></app-icon>
      </stencil-route-link>
    ])
  }
}