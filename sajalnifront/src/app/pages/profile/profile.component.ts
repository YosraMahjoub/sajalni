import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, DefaultUrlSerializer, Router } from '@angular/router';
import { User } from 'src/app/Models/user';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user!: User;
  roles!: String
  constructor(private token: TokenStorageService,
    private us: UserService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.roles=this.token.getUser().roles;
    this.us.getUserById(this.token.getUser().id).subscribe(data => {
      this.user = data;
      console.log(data);
      console.log(this.user);
    }, error => console.log(error));


  }
  
  onSubmit(){ 
   
    this.us.updateUser(this.user.id,this.user).subscribe( data =>{
      console.log(data);
      this.token.saveUser(data);
      this.router.navigate(['/user']);
    }
    , error => console.log(error));
  }
  
   
}
