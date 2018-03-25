import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BbRoutingModule } from './bb-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BbRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
