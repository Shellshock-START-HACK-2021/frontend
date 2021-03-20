import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;
  backendUrl = 'https://store-med.herokuapp.com/auth/login';

  constructor(
    private router: Router,

    private fb: FormBuilder,

    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      email: '',
      password: '',
    });
  }

  get email() {
    return this.myForm.get('email');
  }

  get password() {
    return this.myForm.get('password');
  }

  onSubmit() {
    const header = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = this.myForm.value;
    this.http.post(this.backendUrl, body, { headers: header }).subscribe(
      (data) => {
        console.log('Sucess');
        console.log(data);
      },
      (error) => {
        console.log('error');
        console.log(error);
      }
    );
  }
}
