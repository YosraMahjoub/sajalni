import { Component, OnInit } from '@angular/core';
import { Demande } from 'src/app/Models/demande';
import { DemandeService } from 'src/app/services/demande.service';

@Component({
  selector: 'app-list-alldem',
  templateUrl: './list-alldem.component.html',
  styleUrls: ['./list-alldem.component.css']
})
export class ListAlldemComponent implements OnInit {

  demandes!: Demande[];
  searchValue!:string
  constructor( private ds: DemandeService) { }

  ngOnInit(): void {
    this.ds.getDMs().subscribe(data => {
      this.demandes = data;
      console.log(data);
    }
    );
  }






}
