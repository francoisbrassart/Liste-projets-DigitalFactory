import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderCapComponent } from './header-cap/header-cap.component';
import { SearchBarCapComponent } from './search-bar-cap/search-bar-cap.component';
import { ArrayFilterableAndSortableComponent } from './array-filterable-and-sortable/array-filterable-and-sortable.component';
import {ProjetsService} from './services/projets.service'
import { FormsModule } from '@angular/forms';
import {ReceiveDataService} from './services/receive-data.service'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { Routes, RouterModule } from '@angular/router';
import { ProjetsComponent } from './projets/projets.component';
import { UsersComponent } from './users/users.component';

const appRoutes: Routes = [
  { path: 'users', component: UsersComponent  },
  { path: 'projets', component: ProjetsComponent },
  { path: '**', redirectTo: 'projets' }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderCapComponent,
    SearchBarCapComponent,
    ArrayFilterableAndSortableComponent,
    MenuComponent,
    ProjetsComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ProjetsService,ReceiveDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
