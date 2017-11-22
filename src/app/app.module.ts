import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { app_routing } from './app.routes';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { RulingsComponent } from './components/rulings/rulings.component';

@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		HomeComponent,
		RulingsComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		app_routing
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
