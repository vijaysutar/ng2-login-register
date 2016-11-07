import { Component } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {

  model:any={};

  constructor(
    private router: Router

  ) { }

  register(){
    console.log(this.model);
  }

}
