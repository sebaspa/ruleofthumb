import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./components/home/home.component";
import { PastrialsComponent } from "./components/pastrials/pastrials.component";
import { HowitworksComponent } from "./components/howitworks/howitworks.component";

const app_routes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'past-trials', component: PastrialsComponent },
	{ path: 'how-it-works', component: HowitworksComponent },
	{ path: '', pathMatch: 'full', redirectTo: 'home' }
];

export const app_routing = RouterModule.forRoot(app_routes, { useHash: true });
