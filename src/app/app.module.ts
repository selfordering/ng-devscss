import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { EventComponent } from './event/event.component';
import { MenuComponent } from './menu/menu.component';
import { OrderComponent } from './order/order.component';
import { CouponComponent } from './coupon/coupon.component';
import { ReviewComponent } from './review/review.component';
import { RateComponent } from './rate/rate.component';
import { ExpenditureComponent } from './expenditure/expenditure.component';
import { ProductComponent } from './product/product.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ReportComponent } from './report/report.component';

import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

// Create Route
const appRoutes: Routes = [
  { path: 'user',  component: UserComponent },
  { path: 'restaurant', component: RestaurantComponent },
  { path: 'event',  component: EventComponent },
  { path: 'menu',  component: MenuComponent },
  { path: 'order', component: OrderComponent},
  { path: 'coupon', component: CouponComponent },
  { path: 'review', component: ReviewComponent },
  { path: 'rate', component: RateComponent },
  { path: 'expenditure', component: ExpenditureComponent },
  { path: 'product', component: ProductComponent },
  { path: 'reservation', component: ReservationComponent },
  { path: 'report', component: ReportComponent },
  { path: '**', component: RestaurantComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RestaurantComponent,
    EventComponent,
    MenuComponent,
    OrderComponent,
    CouponComponent,
    ReviewComponent,
    RateComponent,
    ExpenditureComponent,
    ProductComponent,
    ReservationComponent,
    ReportComponent,
    NavbarComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
