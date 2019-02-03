/*
* @author Elionai Moura Cordeiro
* @version 1.0.0
* @description Routing the resources
*/

import { Component } from '@angular/core';
import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ExpensesComponent } from './expenses/expenses.component';

export const ROUTES: Routes = [
    { path: '', component: HomeComponent},
    { path: 'expenses', component: ExpensesComponent}
]