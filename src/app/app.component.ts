import { Component, ViewChild } from '@angular/core';
import { IxMenu } from '@siemens/ix-angular';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
    <ix-basic-navigation application-name="Virtual Lab" #sidebar>
      <div class="placeholder-logo" slot="logo">
        <ix-icon name="ai" size="32"></ix-icon>
      </div>
      <ix-menu #menu [enableToggleTheme]="true">
        <ix-menu-avatar image="https://ui-avatars.com/api/?name=John+Doe">
          <ix-menu-avatar-item label="Option 1"></ix-menu-avatar-item>
        </ix-menu-avatar>
        <ix-menu-item
          home-tab
          tab-icon="home"
          routerLink=""
          routerLinkActive="active"
          [routerLinkActiveOptions]="{ exact: true }"
        >
          Home
        </ix-menu-item>
        <ix-menu-item
          tab-icon="globe"
          routerLink="ix-demo"
          routerLinkActive="active"
          [routerLinkActiveOptions]="{ exact: true }"
        >
          Normal Tab
        </ix-menu-item>
        <ix-menu-item tab-icon="star" disabled> Disabled Tab </ix-menu-item>
        <ix-menu-item tab-icon="star"> With other Icon </ix-menu-item>
        <ix-menu-item tab-icon="globe" style="display: none">
          Should not visible
        </ix-menu-item></ix-menu
      >
      <div class="container">
        <router-outlet></router-outlet>
      </div>
    </ix-basic-navigation>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ix-poc';
  @ViewChild(IxMenu) menu!: IxMenu;

  ngAfterViewInit(): void {
    this.menu.toggleMapExpand(false);
    const el: HTMLElement | null = document.querySelector('#menu-collapse');

    el?.click();
  }

  toggle() {
    const el: HTMLElement | null = document.querySelector('#menu-collapse');

    el?.click();
    this.menu.mapExpandChange.emit(
      new CustomEvent('', {
        detail: false,
      })
    );
  }
}
