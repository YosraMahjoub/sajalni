import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Dossier } from 'src/app/Models/dossier';
import { DossierService } from 'src/app/services/dossier.service';

@Component({
  selector: 'app-create-dossier',
  templateUrl: './create-dossier.component.html',
  styleUrls: ['./create-dossier.component.css']
})
export class CreateDossierComponent implements OnInit {

  dossier: Dossier = new Dossier();
  constructor(private dos: DossierService,
    private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.dos.adddos(this.dossier).subscribe( data =>{
     
      console.log(data);
      this.router.navigate(['/dossier/agentAll']);
    },
    error => console.log(error));
 console.log(this.dossier);
  }

}
