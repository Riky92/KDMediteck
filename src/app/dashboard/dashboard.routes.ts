import { Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/pages/dashboard/dashboard.component';
import {CarrieraComponent} from './pages/carriera/carriera.component';

export const DASHBOARD_ROUTES: Routes = [{
  path: '',
  component: DashboardComponent
	} , {
	path: 'dashboard',
  component: DashboardComponent
	} ,
	{
	path: 'carriera',
  component: CarrieraComponent
	}
];
