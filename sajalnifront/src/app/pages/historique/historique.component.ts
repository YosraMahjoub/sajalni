import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Dossier } from 'src/app/Models/dossier';
import { Historique } from 'src/app/Models/historique';
import { DossierService } from 'src/app/services/dossier.service';
import { HistoriqueService } from 'src/app/services/historique.service';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css']
})
export class HistoriqueComponent implements OnInit {

  dossiers !: Dossier []  ;
  searchValue!:string
 i!: number;
  constructor(private ds: DossierService,
    private router: Router) { }


  ngOnInit(): void {

    this.ds.getDoss().subscribe(data => {
      this.dossiers= data;
      console.log(this.i)

    });
  }



}
