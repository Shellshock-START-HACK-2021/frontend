import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  myForm: FormGroup;
  backendUrl = 'https://store-med.herokuapp.com/auth/signup';
  constructor(
    private router: Router,

    private fb: FormBuilder,

    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: '',
      email: '',
      password: '',
    });
  }

  get name() {
    return this.myForm.get('name');
  }

  get email() {
    return this.myForm.get('email');
  }

  get password() {
    return this.myForm.get('password');
  }

  onClick() {
    this.router.navigate(['/', 'login']);
  }

  onSubmit() {
    const header = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = this.myForm.value;
    console.log(body);
    this.http.post(this.backendUrl, body, { headers: header }).subscribe(
      (data) => {
        console.log(data);
        this.router.navigate(["/", "login"]);
      },
      (error) => {
        alert("Sign up was unsuccessful. Please try again!");
      }
    );
  }
}
