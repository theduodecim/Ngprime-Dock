import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeDockComponent } from './components/prime-dock/prime-dock.component';
import {DockModule} from 'primeng/dock';
import {GalleriaModule} from 'primeng/galleria';
import {DialogModule} from 'primeng/dialog';
import {TreeModule} from 'primeng/tree';
import {TerminalModule} from 'primeng/terminal';
import {CardModule} from 'primeng/card';
import {TabViewModule} from 'primeng/tabview';
import {MenubarModule} from 'primeng/menubar';
import {ToastModule} from 'primeng/toast';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    PrimeDockComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
		CardModule,
    DockModule,
		TabViewModule,
    MenubarModule,
    DialogModule,
    TerminalModule,
    TreeModule,
    ToastModule,
    GalleriaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
