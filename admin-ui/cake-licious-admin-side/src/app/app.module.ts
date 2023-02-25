import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClient,HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProdlistComponent } from './prodlist/prodlist.component';
import { ProdeditComponent } from './prodedit/prodedit.component';
import { CatlistComponent } from './catlist/catlist.component';
import { CateditComponent } from './catedit/catedit.component';
import { OcclistComponent } from './occlist/occlist.component';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { OrderdetailComponent } from './orderdetail/orderdetail.component';
import { SigninComponent } from './signin/signin.component';
import { SuggetionComponent } from './suggetion/suggetion.component';

import { ProductByCategoryComponent } from './product-by-category/product-by-category.component';
import {AdminService} from 'src/app/services/admin.service';
import {TokenService} from 'src/app/services/token.service';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QueryComponent } from './query/query.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { SearchProductComponent } from './search-product/search-product.component';
import { CacheService } from './interceptor/cache.service';
import { FlavourComponent } from './flavour/flavour.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProdlistComponent,
    ProdeditComponent,
    CatlistComponent,
    CateditComponent,
    OcclistComponent,
    OrderlistComponent,
    CustomerlistComponent,
    OrderdetailComponent,
    SigninComponent,
    SuggetionComponent,

    ProductByCategoryComponent,
    QueryComponent,
    FeedbackComponent,
    SearchProductComponent,
    FlavourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [AdminService,
    {
    provide : HTTP_INTERCEPTORS,
    useClass: TokenService,
    multi:true},
    {
    useClass: CacheService,
    provide: HTTP_INTERCEPTORS,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
