import { Routes } from '@angular/router';

import { Feature1 } from './exposed-modules/feature-1/feature-1';

export const routes: Routes = [
  {
    path: '',
    component: Feature1,
  },
];
