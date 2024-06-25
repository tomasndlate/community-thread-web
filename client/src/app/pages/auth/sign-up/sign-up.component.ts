import { Component } from '@angular/core';
import { AuthFieldForm } from 'src/app/models/forms.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  usernameField: AuthFieldForm = {
    label: "Username",
    type: "text",
    value: "",
    status: "default",
    isLocked: false
  }

  emailField: AuthFieldForm = {
    label: "Email",
    type: "text",
    value: "",
    status: "default",
    isLocked: false
  }

  passwordField: AuthFieldForm = {
    label: "Password",
    type: "password",
    value: "",
    status: "default",
    isLocked: false
  }

  nameField: AuthFieldForm = {
    label: "Name",
    type: "text",
    value: "",
    status: "default",
    isLocked: false
  }

  test(){
    alert("HERE")
  }

  updateUsernameFieldValue(usernameField: AuthFieldForm, value: string) {
    usernameField.value = value
    console.log(usernameField)
  }
}
