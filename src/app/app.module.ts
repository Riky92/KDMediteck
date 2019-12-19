import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule} from '../app/dashboard/dashboard.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
// import { registerLocaleData } from '@angular/common';
// import localeIt from '@angular/common/locales/it';

// registerLocaleData(localeIt, "it");

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
		AppRoutingModule,
		DashboardModule,
		AngularFontAwesomeModule
  ],
  providers: [
		// { provide: LOCALE_ID, useValue: "it-IT" }
	],
  bootstrap: [AppComponent]
})
export class AppModule { }
