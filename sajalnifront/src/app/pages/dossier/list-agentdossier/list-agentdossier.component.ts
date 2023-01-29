import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Dossier } from 'src/app/Models/dossier';
import { DossierService } from 'src/app/services/dossier.service';

@Component({
  selector: 'app-list-agentdossier',
  templateUrl: './list-agentdossier.component.html',
  styleUrls: ['./list-agentdossier.component.css']
})
export class ListAgentdossierComponent implements OnInit {

  dossiers!:  Dossier[];
  searchValue!:string

  constructor(private dos: DossierService,
    private router: Router) { }


  ngOnInit(): void {

    this.dos.getmyDs().subscribe(data => {
      this.dossiers = data;
      console.log(data)
    });
  }

  addDos(){
    this.router.navigate(['dossier/add']);
  }
  updateDS(id: number){
    this.router.navigate(['dossier/update', id]);
  }
  
  deleteDS(id: number){
    this.dos.deleteDos(id).subscribe( data => {
      console.log(data);
      location.reload();
    })
  }

}
