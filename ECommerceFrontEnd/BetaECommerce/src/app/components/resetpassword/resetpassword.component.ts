import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResetPassword } from 'src/app/models/ResetPassword';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {

  // constructor() { }

  // ngOnInit(): void {
  // }
  constructor(private routes:Router,private service:AuthService) { }

  reset:ResetPassword=
  
   {
  
  token:'',
  
  password:'',
  
   confirmPassword:''
  
  }
  
  
  
   Resetpassword()
  
  {
  
  this.service.resetpassword(this.reset).subscribe(res=>{
  
  console.log('res',res);
  
  this.routes.navigate(['login']);
  
   })
  
   }
  
  
  
  
   ngOnInit(): void {
  
   }

}
