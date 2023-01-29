import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  nom!: string;
  email!: string;
  mdp!: string;
  roles!: string;
  constructor(private us: UserService,
    private router: Router) { }

  ngOnInit(): void {
  }
  saveUser(){
    this.us.addUser(this.nom ,this.email, this.mdp,this.roles).subscribe( data =>{
      console.log(data);
      this.goToUserList();
    },
    error => {console.log(error);
      console.log(this.roles);
    });
  }
  goToUserList(){
    this.router.navigate(['/user']);
  }
  onSubmit(){
    this.saveUser();
  }

}
