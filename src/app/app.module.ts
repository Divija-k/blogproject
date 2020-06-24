import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import{ FormsModule} from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { BlogMainComponent } from './blog-main/blog-main.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AboutComponent } from './about/about.component';
import { HttpreqService } from './httpreq.service';

@NgModule({
  declarations: [
    AppComponent,
    BlogMainComponent,
    BlogViewComponent,
    BlogCreateComponent,
    BlogEditComponent,
    PagenotfoundComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'home', component: BlogMainComponent},
      {path:'', redirectTo:'home',pathMatch:'full'},
      {path:'about', component: AboutComponent},
      {path:'view/:BlodId', component: BlogViewComponent},
      {path:'edit/:BlogId', component: BlogEditComponent},
      {path:'create', component: BlogCreateComponent},
      {path:'**', component: PagenotfoundComponent}
    ])
  ],
  providers: [HttpreqService],
  bootstrap: [AppComponent]
})
export class AppModule { }
