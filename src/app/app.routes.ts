import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { UserList } from './users/user-list/user-list';
import { UserForm } from './users/user-form/user-form';

export const routes: Routes = [
  {
    path: '',
    component: UserList
  },
  {
    path: 'user-form',
    component: UserForm
  },
  {
    path: 'user-form/:id',
    component: UserForm
  }
];
