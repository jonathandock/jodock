import { Routes } from '@angular/router';
import { HomePage } from './features/home/pages/home/home.page';
import { ConcertsPage } from './features/concerts/pages/concerts/concerts.page';

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'concerts',
    component: ConcertsPage,
  },
];
