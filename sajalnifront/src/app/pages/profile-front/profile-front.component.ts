import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
 import { User } from 'src/app/Models/user';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile-front',
  templateUrl: './profile-front.component.html',
  styleUrls: ['./profile-front.component.css']
})
export class ProfileFrontComponent implements OnInit {

  user!: User;
  constructor(private token: TokenStorageService,
    private us: UserService,
    private route: ActivatedRoute,
    private router: Router) { }
    
  ngOnInit(): void {

    this.us.getUserById(this.token.getUser().id).subscribe(data => {
      this.user = data;
      this.user.mdp="";

    }, error => console.log(error));



   // this.user = this.token.getUser();
    // this.roles = this.token.getUser().roles;
  }
  
  onSubmit(){
    if(this.user.mdp===""){
      this.user.mdp=this.token.getUser().mdp;
    } 
    this.us.updateUser(this.user.id,this.user).subscribe( data =>{
      
      this.token.saveUser(data);
      location.reload();

    }
    , error => console.log(error));
  }

}
