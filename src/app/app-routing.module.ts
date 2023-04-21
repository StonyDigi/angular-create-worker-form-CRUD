import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  //itt vesszük fel a /list , /create útvonalakat
  //a semmi átvisz a listre
  //nagyon fontos, hogy ez a sorrend legyen. különben nem működik az összes, jokernek az utolsó helyen van a helye!
  {path: '', redirectTo: 'create', pathMatch: 'full'},
  {path: 'list', component: ListComponent},
  {path: 'create', component: CreateComponent},
  //:id paraméter adat és id-nek nevezem el
  {path: 'update/:id', component: UpdateComponent},
  {path: '**', redirectTo: 'list', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
