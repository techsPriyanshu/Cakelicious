import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProdlistComponent} from './prodlist/prodlist.component';
import {OrderlistComponent} from './orderlist/orderlist.component';
import {ProdeditComponent} from './prodedit/prodedit.component';
import {CatlistComponent} from './catlist/catlist.component';
import {CateditComponent} from './catedit/catedit.component';
import {OcclistComponent} from './occlist/occlist.component'
import{CustomerlistComponent} from './customerlist/customerlist.component';
import{OrderdetailComponent} from './orderdetail/orderdetail.component'
import {SigninComponent} from './signin/signin.component';
import {SuggetionComponent} from './suggetion/suggetion.component';

import {ProductByCategoryComponent} from './product-by-category/product-by-category.component' ;
import { QueryComponent } from './query/query.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { SearchProductComponent } from './search-product/search-product.component';
import { FlavourComponent } from './flavour/flavour.component';

const routes: Routes = [
  {path:"",component:DashboardComponent},
  {path:"prodlist",component:ProdlistComponent},
  {path:"orderlist",component:OrderlistComponent},
  {path:"prodedit",component:ProdeditComponent},
  {path:"catlist",component:CatlistComponent},
  {path:"catedit",component:CateditComponent},
  {path:"occlist",component:OcclistComponent},
  {path:"customerlist",component:CustomerlistComponent},
  {path:"order/:id",component:OrderdetailComponent},
  {path:"signin",component:SigninComponent},
  {path:"suggetion",component:SuggetionComponent},
  {path:"productByCategory/:id",component:ProductByCategoryComponent},
  {path:"queryList",component:QueryComponent},
  {path:"feedbackList",component:FeedbackComponent},
  {path:"search-product/:text",component:SearchProductComponent},
  {path:"flavor",component:FlavourComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
