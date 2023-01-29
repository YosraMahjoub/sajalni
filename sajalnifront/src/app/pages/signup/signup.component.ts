import { Component, OnInit } from '@angular/core';
import { NgForm}  from '@angular/forms';
import { Router } from '@angular/router';

import { User } from 'src/app/Models/user';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  user: User = new User();
  constructor(private us: UserService,
    private router: Router,private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    window.sessionStorage.clear();
  }
  onSubmit(){
    this.us.signup(this.user).subscribe( data =>{
      console.log(this.user);
      this.router.navigate(['/login']);
    },
    error => console.log(error));
  }


}
