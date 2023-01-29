import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage.service';




@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  url!: String;
  roles!: String
  

  constructor( private token: TokenStorageService, private router: Router) { }

  ngOnInit() {
    this.url = this.router.url;
    this.roles=this.token.getUser().roles
    console.log("hhhhhhhhhhhh"+this.roles)
  }
 
}
