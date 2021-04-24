import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import {GmapsComponent} from './gmaps/gmaps.component';
import {OmapsComponent} from './omaps/omaps.component';
import {ContactsComponent} from './contacts/contacts.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
//   { path: '',   redirectTo: '/public',  pathMatch: 'full' },
  { path: 'omaps',   component: OmapsComponent },
  { path: 'gmaps',   component: GmapsComponent },
  { path: 'contacts',   component: ContactsComponent },
  { path: 'about',   component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
