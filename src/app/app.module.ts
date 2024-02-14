import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransyformComponent } from './components/transyform/transyform.component';
import { OriginalslotComponent } from './components/originalslot/originalslot.component';
import { TranslatedslotComponent } from './components/translatedslot/translatedslot.component';
import { FormsModule } from '@angular/forms';
import { RightSlotComponent } from './components/right-slot/right-slot.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadingComponent } from './components/loading/loading.component';
import { HttpClientModule } from '@angular/common/http';
import { LogoComponent } from './components/logo/logo.component';

@NgModule({
  declarations: [
    AppComponent,
    TransyformComponent,
    OriginalslotComponent,
    TranslatedslotComponent,
    RightSlotComponent,
    LoadingComponent,
    LogoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
