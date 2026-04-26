import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './HomeComponents/home/home.component';
import { WelcomeComponent } from './HomeComponents/welcome/welcome.component';
import { AboutMeComponent } from './HomeComponents/about-me/about-me.component';
import { WhatIDoComponent } from './HomeComponents/what-ido/what-ido.component';
import { PortfolioComponent } from './HomeComponents/portfolio/portfolio.component';
import { ResumeComponent } from './HomeComponents/resume/resume.component';
import { ContactComponent } from './HomeComponents/contact/contact.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import { NavMobComponent } from './nav-bar/nav-mob/nav-mob.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NotifierModule, NotifierOptions } from 'angular-notifier'

const customNotifierOptions: NotifierOptions = {
  position: {
		horizontal: {
			position: 'right',
			distance: 12
		},
		vertical: {
			position: 'top',
			distance: 12,
			gap: 10
		}
	},
  theme: 'material',
  behaviour: {
    autoHide: 5000,
    onClick: 'hide',
    onMouseover: 'pauseAutoHide',
    showDismissButton: true,
    stacking: 4
  },
  animations: {
    enabled: true,
    show: {
      preset: 'slide',
      speed: 300,
      easing: 'ease'
    },
    hide: {
      preset: 'fade',
      speed: 300,
      easing: 'ease',
      offset: 50
    },
    shift: {
      speed: 300,
      easing: 'ease'
    },
    overlap: 150
  }
};

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    WelcomeComponent,
    AboutMeComponent,
    WhatIDoComponent,
    PortfolioComponent,
    ResumeComponent,
    ContactComponent,
    NavMobComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatCardModule,
    MatTabsModule,
    HttpClientModule,
    NotifierModule.withConfig(customNotifierOptions)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
