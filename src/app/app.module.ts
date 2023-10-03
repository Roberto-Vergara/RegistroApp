import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

// hay que descargar por npm @awesome-cordova-plugins/sqlite/ngx
//para trabajr con sqlite
import {SQLite} from "@awesome-cordova-plugins/sqlite/ngx";

// servicio. los inyectables se especifican en los proveedores
import { DatabaseService } from './services/database.service';



@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,FormsModule],
  providers: [DatabaseService,SQLite,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy}],
  bootstrap: [AppComponent],
})
export class AppModule {}
