import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, RequiredValidator } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { User, UserInformation } from '../../user';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {
  formRegister = this.fb.group({
    'firstname': ['', [Validators.required]],
    'lastname': ['', [Validators.required]],
    'address': ['', [Validators.required]],
    'city': ['', [Validators.required]],
    'state': ['', [Validators.required]],
    'phone': ['', [Validators.required]],
    'mobilephone': ['', [Validators.required]],
    'email': ['', [Validators.required, Validators.email]],
    'password1': ['', [Validators.required, Validators.minLength(6)]],
    'password2': ['', [Validators.required, Validators.minLength(6)]],
  }, { validator: this.matchingPasswords});

states = ["MG", "RS", "SC", "GO", "PR", "SP"];
  userInfo: UserInformation;
  constructor(private fb: FormBuilder) { 
    this.userInfo = {} as UserInformation;

  }

  ngOnInit(): void {
  }
  matchingPasswords(group: FormGroup){
    if(group){
      const password1= group.controls['password1'].value;
      const password2= group.controls['password2'].value;
      if(password1==password2){
        return null;
      }
    }
    return{ matching:false};
  }
  onSubmit(){

  }

}
