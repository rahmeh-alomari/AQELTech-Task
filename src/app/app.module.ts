import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './compnenets/home/home.component';
import { ServicesComponent } from './compnenets/services/services.component';
import { SolutionsComponent } from './compnenets/solutions/solutions.component';
import { ECommerceComponent } from './compnenets/e-commerce/e-commerce.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PartnersComponent } from './compnenets/partners/partners.component';
import { SliderComponent } from './compnenets/slider/slider.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ServicesComponent,
    SolutionsComponent,
    ECommerceComponent,
    FooterComponent,
    PartnersComponent,
    SliderComponent
  ],
  imports: [

        BrowserModule,
        BrowserAnimationsModule,
        CarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
