import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { CardComponent } from './card/card.component';
import { TableComponent } from './table/table.component';
import{HttpClientModule} from '@angular/common/http';
import { CalendarComponent } from './calendar/calendar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { SidenavComponent } from './sidenav/sidenav.component'
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { BarComponent } from './bar/bar.component';
import { WishesComponent } from './wishes/wishes.component';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LeadComponent } from './lead/lead.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MultiformComponent } from './multiform/multiform.component';
import { QualifiedComponent } from './qualified/qualified.component';
import { InterestedComponent } from './interested/interested.component';
import { BirthdayWishComponent } from './birthday-wish/birthday-wish.component';
import { RenewalComponent } from './renewal/renewal.component';
import { ExpiredComponent } from './expired/expired.component';
import { TotalComponent } from './total/total.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    CardComponent,
    TableComponent,
    CalendarComponent,
    SidenavComponent,
    BarComponent,
    WishesComponent,
    MainComponent,
    DashboardComponent,
    LeadComponent,
    MultiformComponent,
    QualifiedComponent,
    InterestedComponent,
    BirthdayWishComponent,
    RenewalComponent,
    ExpiredComponent,
    TotalComponent,

    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    FormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
