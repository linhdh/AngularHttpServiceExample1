import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-edit',
  standalone: true,
  imports: [],
  templateUrl: './employee-edit.component.html',
  styleUrl: './employee-edit.component.scss'
})
export class EmployeeEditComponent implements OnInit {
  id = this.actRoute.snapshot.params['id'];
  employeeData: any = {};
  constructor(
    public employeeApi: EmployeeService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) { 
  }
  ngOnInit() { 
    this.employeeApi.getEmployee(this.id).subscribe((data: {}) => {
      this.employeeData = data;
    })
  }
  // Update employee data
  updateEmployee() {
    if(window.confirm('Are you sure, you want to update?')){
      this.employeeApi.updateEmployee(this.id, this.employeeData).subscribe(data => {
        this.router.navigate(['/employees-list'])
      })
    }
  }
}
