import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { CellComponent } from './cell/cell.component';
import { EngComponent } from './eng/eng.component';
import { SerComponent } from './ser/ser.component';
import { CeComponent } from './ce/ce.component';
import { AmpComponent } from './amp/amp.component';
import { AmpengComponent } from './ampeng/ampeng.component';
import { PpComponent } from './pp/pp.component';
import { TruncatePipe } from './truncate.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    CellComponent,
    EngComponent,
    SerComponent,
    CeComponent,
    AmpComponent,
    AmpengComponent,
    PpComponent,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,


// The HttpClientInMemoryWebApiModule module intercepts HTTP requests
// and returns simulated server responses.
// Remove it when a real server is ready to receive requests.

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
