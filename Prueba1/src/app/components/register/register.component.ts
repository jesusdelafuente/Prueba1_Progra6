import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{

  registerUser: any ={
    email:'',
    password:''
  }
  constructor(private authService:AuthService){  }

  ngOnInit(): void {

  }
  //metodo para registrar al usuario
  register(registerUser:any){
    this.authService.register(registerUser.email, registerUser.password)
  }
}
