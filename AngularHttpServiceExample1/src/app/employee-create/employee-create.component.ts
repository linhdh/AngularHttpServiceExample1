import { Component, Input, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-create',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './employee-create.component.html',
  styleUrl: './employee-create.component.scss'
})
export class EmployeeCreateComponent implements OnInit {
  @Input() employeeDetails = { name: '', email: '', phone: 0 };
  constructor(public employeeApi: EmployeeService, public router: Router) {}
  ngOnInit() {}
  addEmployee(dataEmployee: any) {
    this.employeeApi.createEmployee(this.employeeDetails).subscribe((data: {}) => {
      this.router.navigate(['/employees-list']);
    });
  }
}
