import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PageListComponent } from './page-list/page-list.component';
import { TemplateShopComponent } from './components/template-shop/template-shop.component';
import { TemplateShopFormComponent } from './components/template-shop-form/template-shop-form.component';
import { TemplateHeaderComponent } from './components/template-header/template-header.component';

@NgModule({
  declarations: [
    AppComponent,
    PageListComponent,
    TemplateShopComponent,
    TemplateShopFormComponent,
    TemplateHeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    PageListComponent,
    TemplateShopComponent,
    TemplateShopFormComponent,
    TemplateHeaderComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
