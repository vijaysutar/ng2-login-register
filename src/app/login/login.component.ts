import { Component } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {

  model:any={};

  constructor(
    private router: Router

  ) { }

  login(){
    console.log(this.model);
  }

}
