import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { DASHBOARD_COMPONENTS} from './index';
import { AvatarModule } from 'ngx-avatar';
import { DASHBOARD_ROUTES} from './dashboard.routes';
import { RouterModule, } from '@angular/router';





@NgModule({
  declarations: [DASHBOARD_COMPONENTS],
  imports: [
		CommonModule,
		AvatarModule,
		RouterModule.forChild(DASHBOARD_ROUTES),
		BrowserModule,
    HttpClientModule,
  ]
})
export class DashboardModule { }
