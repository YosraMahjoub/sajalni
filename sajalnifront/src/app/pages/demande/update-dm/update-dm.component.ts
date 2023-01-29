import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Demande } from 'src/app/Models/demande';
import { DemandeService } from 'src/app/services/demande.service';

@Component({
  selector: 'app-update-dm',
  templateUrl: './update-dm.component.html',
  styleUrls: ['./update-dm.component.css']
})
export class UpdateDmComponent implements OnInit {

  demande!: Demande
  constructor(private ds: DemandeService,
    private route: ActivatedRoute,
    private router: Router) { }


  ngOnInit(): void {
    this.ds.getDMById(this.route.snapshot.params['id']).subscribe(data => {
      this.demande = data;
      console.log(data);
    }, error => console.log(error));
 
  }
  onSubmit(){
      
    this.ds.updateDM(this.demande.refsw,this.demande).subscribe( data =>{
      this.router.navigate(['/demandeClient']);
     }
     , error => 
     console.log(error));
   }


}
