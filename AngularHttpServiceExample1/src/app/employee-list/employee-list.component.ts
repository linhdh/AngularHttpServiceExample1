import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss'
})
export class EmployeeListComponent implements OnInit {
  Employee: any = [];
  constructor(public employeeApi: EmployeeService) {}
  ngOnInit() {
    this.loadEmployees();
  }
  // Get employees list
  loadEmployees() {
    return this.employeeApi.getEmployees().subscribe((data: {}) => {
      this.Employee = data;
    });
  }
  // Delete employee
  deleteEmployee(id: any) {
    if (window.confirm('Are you sure, you want to delete?')) {
      this.employeeApi.deleteEmployee(id).subscribe((data) => {
        this.loadEmployees();
      });
    }
  }
}
