import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication-service.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor(private authService: AuthenticationService,
    private router:Router) { }

  ngOnInit(): void {
  }

  logout() {
    this.authService.setIsAuthenticated(false);
    this.router.navigate(['/', 'login']);
  }

}
