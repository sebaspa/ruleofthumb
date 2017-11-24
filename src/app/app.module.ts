import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Rutas
import { app_routing } from './app.routes';

//Servicios
import { charactersService } from './services/characters.service';

//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { RulingsComponent } from './components/rulings/rulings.component';
import { FooterComponent } from './components/footer/footer.component';
import { PastrialsComponent } from './components/pastrials/pastrials.component';
import { HowitworksComponent } from './components/howitworks/howitworks.component';
import { RoundPipe } from './pipes/round.pipe';

@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		HomeComponent,
		RulingsComponent,
		FooterComponent,
		PastrialsComponent,
		HowitworksComponent,
		RoundPipe
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		app_routing
	],
	providers: [
		charactersService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
