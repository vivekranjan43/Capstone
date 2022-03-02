import { Component, OnInit } from '@angular/core';
import { user } from '../user';
import { UserService } from '../user.service';
import { Router, Routes } from '@angular/router';
import { of } from 'rxjs';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  u:any={};
  constructor(private userService: UserService, private router: Router) { }

  add(): void {

   console.log(this.u);
   //this.userService.addUser(this.u).subscribe({complete: console.info});
   this.userService.addUser(this.u).subscribe((data)=>
     {this.u=data;
      console.log(this.u),
      sessionStorage.setItem("user",JSON.stringify(this.u))
    this.router.navigate(['list'])}, 
      (error)=>console.log(error.status)
   )
}
  ngOnInit() {
  }

}