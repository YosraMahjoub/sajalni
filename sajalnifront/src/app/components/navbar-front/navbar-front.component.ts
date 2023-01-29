import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/Models/user';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar-front',
  templateUrl: './navbar-front.component.html',
  styleUrls: ['./navbar-front.component.css']
})
export class NavbarFrontComponent implements OnInit {
  url!: String;
  user!: User;
  constructor( private route: ActivatedRoute,
    private router: Router
   , private token: TokenStorageService,
    private us: UserService,
    ) { }

  ngOnInit(): void {
    this.url = this.router.url;
    this.us.getUserById(this.token.getUser().id).subscribe(data => {
      this.user = data;
      console.log(data);
      console.log(this.user);
    }, error => console.log(error));

  }

}
