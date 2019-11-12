import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarTopComponent } from './top-bar-top/top-bar-top.component';
import { ContentListComponent } from './content-list/content-list.component';
import { LoginComponent } from './login/login.component';
import { InsertComponent } from './insert/insert.component';
import { ListInsertComponent } from './list-insert/list-insert.component';
import { EditInsertComponent } from './edit-insert/edit-insert.component';
import { ImageComponent } from './image/image.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    TopBarTopComponent,
    ContentListComponent,
    LoginComponent,
    InsertComponent,
    ListInsertComponent,
    EditInsertComponent,
    ImageComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
