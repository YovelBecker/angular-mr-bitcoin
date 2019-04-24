import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { Routes, RouterModule } from '@angular/router'

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { HttpClientModule } from '@angular/common/http';
import { GoogleChartsModule } from 'angular-google-charts';
import { ChartModule } from 'angular-highcharts';
import { ChartsModule } from 'ng2-charts';

import { HomepageComponent } from './homepage/homepage.component';
import { ContactDetailsPageComponent } from './contact-details-page/contact-details-page.component';
import { ContactEditPageComponent } from './contact-edit-page/contact-edit-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ContactFilterComponent } from './contact-filter/contact-filter.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactPreviewComponent } from './contact-preview/contact-preview.component';
import { ChartComponent } from './chart/chart.component';
import { StatisticsPageComponent } from './statistics-page/statistics-page.component';
import { SignupComponent } from './signup/signup.component';
import { MoveListComponent } from './move-list/move-list.component';
import { MovePreviewComponent } from './move-preview/move-preview.component';
import { TransferFundComponent } from './transfer-fund/transfer-fund.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    ContactDetailsPageComponent,
    ContactEditPageComponent,
    ContactPageComponent,
    ContactFilterComponent,
    ContactListComponent,
    ContactPreviewComponent,
    ChartComponent,
    StatisticsPageComponent,
    SignupComponent,
    MoveListComponent,
    MovePreviewComponent,
    TransferFundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GoogleChartsModule.forRoot(),
    ChartModule,
    ChartsModule,
    FormsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule, MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }