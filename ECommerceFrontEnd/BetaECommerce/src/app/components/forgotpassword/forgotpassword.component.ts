import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ForgotPassword } from 'src/app/models/ForgotPassword';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  // constructor() { }

  // ngOnInit(): void {
  // }
  forgot:ForgotPassword=

  {

    email:''

  }

 

  ForgotPassword(){

    this.authService.forgotPassword(this.forgot).subscribe(res=>{

      console.log('res',res);

    });

    this.route.navigate(['resetpassword']);    

  }

  constructor(private route:Router,private authService:AuthService) { }




  ngOnInit()

  {

   

  }

}
