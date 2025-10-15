import { Component } from '@angular/core';

@Component({
  selector: 'app-remote-feature-1',
  template: `
    <div class="p-4">
      <button>Click</button>
    </div>
  `,
  styles: `
    @import 'tailwindcss';
  `,
})
export class Feature1 {}
