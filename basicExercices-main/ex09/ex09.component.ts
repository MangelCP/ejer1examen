// ex09.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from "../employee";
import { EMPLOYEE_LIST } from "../employee-list";

@Component({
  selector: 'app-ex09',
  standalone: true,
  templateUrl: './ex09.component.html'
})
export class Ex09Component implements OnInit {
  employees: Employee[] = [];
  isButtonEnabled: boolean = false;
  employeeForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.employeeForm = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      department: ['', Validators.required],
      newProperty: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.employees = [...EMPLOYEE_LIST];
    this.isButtonEnabled = this.checkButtonRequirement();
  }

  private checkButtonRequirement(): boolean {
    return this.employeeForm.valid;
  }

  onSubmit() {
    if (this.employeeForm.valid) {
      const newEmployee: Employee = this.employeeForm.value;

      this.employees.push(newEmployee);

      this.employeeForm.reset();


      this.isButtonEnabled = this.checkButtonRequirement();
    }
  }

  navigateToEmployeeDetails() {
    this.router.navigate(['/employee-details']);
  }
}








