import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { CalendarComponent } from './calendar/calendar.component';
import { TableComponent } from './table/table.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { WishesComponent } from './wishes/wishes.component';
import { BarComponent } from './bar/bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LeadComponent } from './lead/lead.component';
import { MultiformComponent } from './multiform/multiform.component';
import { QualifiedComponent } from './qualified/qualified.component';
import { InterestedComponent } from './interested/interested.component';
import { BirthdayWishComponent } from './birthday-wish/birthday-wish.component';
import { RenewalComponent } from './renewal/renewal.component';
import { ExpiredComponent } from './expired/expired.component';

const routes: Routes = [
  {
  path:'card',
   component: CardComponent
  },
  {
    path:'dashboard',
     component: DashboardComponent
    },

  {
  path:'calendar',
   component: CalendarComponent
  },
  {
  path:'table',
  component: TableComponent
  },
  {
  path:'sidenav',
  component: SidenavComponent
  },
  {
    path:'birthday',
    component:BirthdayWishComponent
  },
  {
    path:'bar',
    component: BarComponent
  },
  {
     path:'lead',
     component: LeadComponent
  },
  {
    path:'multiform',
    component: MultiformComponent
  },
  {
    path:'qualified',
    component: QualifiedComponent
  },
  {
    path:'interested',
    component: InterestedComponent
  },
  {
    path:'renewal',
    component:RenewalComponent
  },
  {
    path:'expired',
    component:ExpiredComponent
  }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
