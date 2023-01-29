import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/Models/user';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
url!: String;
user!: User;
  constructor( private token: TokenStorageService, private us: UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.url = this.router.url;
    this.us.getUserById(this.token.getUser().id).subscribe(data => {
      this.user = data;
     
      console.log("gggggggggg"); console.log(this.token.getUser().roles);
    }, error => console.log(error));



  }
  signUp(){
    this.router.navigate(['signup']);
  }

}
