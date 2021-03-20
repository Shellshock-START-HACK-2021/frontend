import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication-service.service';

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

    private http: HttpClient,
    private authenticationService: AuthenticationService
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
        console.log("SUCCESS");
        this.authenticationService.setIsAuthenticated();
        this.router.navigate(['/', 'dashboard']);
      },
      (error) => {
        alert("Log in was unsuccessful. Please try again!");
      }
    );
  }
}
