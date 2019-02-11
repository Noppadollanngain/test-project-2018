import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { 
    path: 'table-room',
    loadChildren: './table-room/table-room.module#TableRoomPageModule' },
  { 
    path: 'login', 
    loadChildren: './login/login.module#LoginPageModule' },
  { 
    path: 'book-room', 
    loadChildren: './book-room/book-room.module#BookRoomPageModule' },
  { path: 'select-time', 
    loadChildren: './select-time/select-time.module#SelectTimePageModule' },
  { path: 'select-time/:id', 
    loadChildren: './select-time/select-time.module#SelectTimePageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
