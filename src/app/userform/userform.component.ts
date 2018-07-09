import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {
  defaultPriority: string = "Advanced";
  submitted: boolean = false;
  @ViewChild('formUser') userforms: NgForm;
 
  constructor() { }
  formData = { email: '', password: '', priority: '' };
  ngOnInit() {
  }

  Save() {
    this.submitted = true;

    this.formData.email = this.userforms.value.email;
    this.formData.password = this.userforms.value.password;
    this.formData.priority = this.userforms.value.ddlpriority;

  }
}
