import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { unauthorizedInterceptorProvider } from './core/interceptors/unauthorized.interceptor';
import { authInterceptorProvider } from './core/interceptors/auth.interceptor';
import { PlayerToolbarModule } from './core/components/player-toolbar/player-toolbar.module';
import { SidenavbarModule } from './core/components/sidenavbar/sidenavbar.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule, PlayerToolbarModule, SidenavbarModule, BrowserAnimationsModule, MatIconModule],
    providers: [authInterceptorProvider, unauthorizedInterceptorProvider],
    bootstrap: [AppComponent],
})
export class AppModule {}
