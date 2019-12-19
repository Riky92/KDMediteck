import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/pages/dashboard/dashboard.component';
import { DashboardModule } from './dashboard/dashboard.module';


const routes: Routes = [
	{
		path:'',
		component: DashboardComponent
	}
];

@NgModule({
  imports: [
		RouterModule.forRoot(routes),
		DashboardModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
