import { Component, OnInit } from '@angular/core';
import { user } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users:user[];
  //selectedUser: user;
  constructor(private userService: UserService) { }

  getUser(): void {
    this.userService.getUsers()
    .subscribe(users => this.users = users);
  }

  delete(us:user):void {
    this.users = this.users.filter(u => u !== us);
    this.userService.deleteUser(us).subscribe();
  }

  ngOnInit() {
    this.getUser();
  }

}