import { Routes } from '@angular/router';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'create-employee' },
    { path: 'create-employee', component: EmployeeCreateComponent },
    { path: 'employees-list', component: EmployeeListComponent },
    { path: 'employee-edit/:id', component: EmployeeEditComponent },
];
