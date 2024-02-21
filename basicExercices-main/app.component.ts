import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'exercise1', component: Exercise1Component },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'exercise1', component: Exercise2Component },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'exercise1', component: Exercise3Component },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'exercise1', component: Exercise4Component },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'exercise1', component: Exercise5Component },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'exercise1', component: Exercise6Component },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'exercise1', component: Exercise7Component },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'exercise1', component: Exercise8Component },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'exercise1', component: Exercise9Component },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'exercise1', component: Exercise10Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
