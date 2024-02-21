import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ex09Component } from './path-to-ex09/ex09/ex09.component';
import { EmployeeDetailsComponent } from './path-to-employee-details/employee-details.component';

const routes: Routes = [
  { path: 'ex09', component: Ex09Component },
  { path: 'employee-details', component: EmployeeDetailsComponent }, // Add this line
  { path: '', redirectTo: '/ex09', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}