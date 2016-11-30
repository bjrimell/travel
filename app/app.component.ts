import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div class="jumbotron">
      <h1>Welcome to Our Angular2 App!</h1>
      <h3>This is a basic starting point for a new project.</h3>
    </div>
  `,
  styles: [`
    .jumbotron { box-shadow: 0 2px 0 rgba(0, 0, 0, 0.2); }
  `]
})
export class AppComponent {}