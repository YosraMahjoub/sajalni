import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Role } from 'src/app/Models/role';
import { User } from '../../../Models/user';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  user!: User;
  rl!: string;
  constructor(private us: UserService,
    private route: ActivatedRoute,
    private router: Router) { }

    ngOnInit(): void {
      
      this.us.getUserById(this.route.snapshot.params['id']).subscribe(data => {
        this.user = data;
        this.rl=this.user.roles[0].name.replace("ROLE_","");
        console.log(data);
      }, error => console.log(error));
   
   
    }
  
    onSubmit(){
      
     this.us.updateUser(this.user.id,this.user).subscribe( data =>{
        this.goToUserList();
      }
      , error => 
      console.log(error));
    }
  
    goToUserList(){
      this.router.navigate(['/user']);
    }




    

}
