import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Dossier } from 'src/app/Models/dossier';
import { DossierService } from 'src/app/services/dossier.service';

@Component({
  selector: 'app-update-dossier',
  templateUrl: './update-dossier.component.html',
  styleUrls: ['./update-dossier.component.css']
})
export class UpdateDossierComponent implements OnInit {
  dossier!: Dossier 
  constructor(private dos: DossierService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.dos.getDosById(this.route.snapshot.params['id']).subscribe(data => {
      this.dossier = data;
      console.log(data);
    }, error => console.log(error));
 
  }

  onSubmit(){
      
    this.dos.updateDos(this.dossier.id,this.dossier).subscribe( data =>{
      this.router.navigate(['/dossier/agentAll']);
     }
     , error => 
     console.log(error));
   }

}
