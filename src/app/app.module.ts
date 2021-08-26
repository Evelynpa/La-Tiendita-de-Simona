import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LogoComponent } from './component/logo/logo.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { BannerStaticComponent } from './component/banner-static/banner-static.component';
import { ImgMenuComponent } from './component/img-menu/img-menu.component';
import { NavTabsComponent } from './component/nav-tabs/nav-tabs.component';
import { LogoMarcasComponent } from './component/logo-marcas/logo-marcas.component';
import { FooterComponent } from './component/footer/footer.component';
import { ProductCardsComponent } from './component/product-cards/product-cards.component';
import { AppRoutingModule } from './app-routing.module';
import { InicioComponent } from './component/inicio/inicio.component';
import { WhatsappComponent } from './component/whatsapp/whatsapp.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    NavBarComponent,
    BannerStaticComponent,
    ImgMenuComponent,
    NavTabsComponent,
    LogoMarcasComponent,
    FooterComponent,
    ProductCardsComponent,
    InicioComponent,
    WhatsappComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [NavBarComponent, ImgMenuComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
