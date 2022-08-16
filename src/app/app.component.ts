import { Component, VERSION } from '@angular/core';
import { FormControl, FormGroup , Validators} from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  loginForm = new FormGroup({
    user: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.minLength(5)]),
    number: new FormControl(''),
  });

  userLogin() {
    console.warn(this.loginForm.value);
  }

  get user(){
    return this.loginForm.get('user')
  }

  get password(){
    return this.loginForm.get('password')
  }
}
