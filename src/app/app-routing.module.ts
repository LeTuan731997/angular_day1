import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent }      from './login/login.component';
import { ContentListComponent }      from './content-list/content-list.component';
import { InsertComponent} from './insert/insert.component';
import { ListInsertComponent} from './list-insert/list-insert.component';
import { EditInsertComponent} from './edit-insert/edit-insert.component';
import { ImageComponent } from './image/image.component';
const routes: Routes = [
  { path: '' ,component: ContentListComponent},
  { path: 'login', component: LoginComponent},
  { path: 'insert', component: InsertComponent},
  { path: 'list', component: ListInsertComponent},
  { path: 'edit/:userName', component: EditInsertComponent},
  { path: 'image', component: ImageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
