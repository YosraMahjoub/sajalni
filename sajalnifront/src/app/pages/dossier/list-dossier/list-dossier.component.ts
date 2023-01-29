import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Dossier } from 'src/app/Models/dossier';
import { DossierService } from 'src/app/services/dossier.service';

@Component({
  selector: 'app-list-dossier',
  templateUrl: './list-dossier.component.html',
  styleUrls: ['./list-dossier.component.css']
})
export class ListDossierComponent implements OnInit {

  dossiers!:  Dossier[];
  searchValue!:string

  constructor(private dos: DossierService,
    private router: Router) { }


  ngOnInit(): void {

    this.dos.getDoss().subscribe(data => {
      this.dossiers = data;
      console.log(data)
    });
  }




}
