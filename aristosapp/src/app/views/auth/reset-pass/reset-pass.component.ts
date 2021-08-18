import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-auth-reset-password',
  templateUrl: './reset-pass.component.html'
})
export class AuthResetPasswordComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  goToHome() {
    this.router.navigate(['emisores/list']);
  }

}
