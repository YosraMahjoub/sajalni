import { Component, OnInit, ɵɵqueryRefresh } from '@angular/core';
import { User } from "../../../Models/user";
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users!:  User[];
  rol!:String;
  searchValue!:string
  constructor(private us: UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.getUsers();
    console.log();
  }
  private getUsers() :  void {
    this.us.getUserList().subscribe(data => {
      this.users = data;
      console.log("user");
      console.log(this.users[0].roles[0].name);
    });
  }
  updateUser(id: number){
    this.router.navigate(['user/update', id]);
  }
  
  deleteUser(id: number){
    this.us.deleteUser(id).subscribe( data => {
      console.log(data);
      location.reload();
    })
  }
  addUser(){
    this.router.navigate(['user/create']);
  }

}
