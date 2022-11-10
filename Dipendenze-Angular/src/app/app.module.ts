import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RatingComponent } from './rating/rating.component';
import { HeaderComponent } from './header/header.component';
import { HomePage } from './pages/home/home.page';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    RatingComponent,
    HeaderComponent,
    HomePage,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
