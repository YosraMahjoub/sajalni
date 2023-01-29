import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/user';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {
    email: null,
    mdp: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  constructor(private us: UserService,
    private router: Router, private tokenStorage: TokenStorageService)  { }

  ngOnInit(): void {
    window.sessionStorage.clear();
  }
  onSubmit(): void {
    const { email, mdp } = this.form;

    this.us.login(email, mdp).subscribe(
      data => {
        console.log(data);
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.roles = this.tokenStorage.getUser().roles;
        if (data.roles =="ROLE_CLIENT") 
        {  this.router.navigate(['/profile']);  } 
        else
        {
          this.router.navigate(['/adminprofile']);
        }
        
      },
      err => {
        this.errorMessage = err.error.message;
        console.log('oops', err.error)
        this.isLoginFailed = true;
      }
    );
  }

  
}
