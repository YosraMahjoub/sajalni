import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Demande } from 'src/app/Models/demande';
import { DemandeService } from 'src/app/services/demande.service';

@Component({
  selector: 'app-list-dem-client',
  templateUrl: './list-dem-client.component.html',
  styleUrls: ['./list-dem-client.component.css']
})
export class ListDemClientComponent implements OnInit {

  demandes!: Demande[];
  searchValue!:string
  constructor( private ds: DemandeService ,
    private router: Router) { }

  ngOnInit(): void {
    this.ds.getmyDMs().subscribe(data => {
      this.demandes = data;
      console.log(data);
    }
    );
  }

  updateDM(id: number){
    this.router.navigate(['demandeClient/update', id]);
  }
  deleteDM(id: number){
    this.ds.deleteDM(id).subscribe( data => {
      console.log(data);
      location.reload();
    })
  }

}
