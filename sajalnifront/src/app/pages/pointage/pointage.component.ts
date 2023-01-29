import { Component, OnInit } from '@angular/core';
import { Demande } from 'src/app/Models/demande';
import { Dossier } from 'src/app/Models/dossier';
import { PointageService } from 'src/app/services/pointage.service';

@Component({
  selector: 'app-pointage',
  templateUrl: './pointage.component.html',
  styleUrls: ['./pointage.component.css']
})
export class PointageComponent implements OnInit {
  demandes!: Demande[];
  dossiers!: Dossier[];
  istrue=false;
  searchValue!:string

  constructor(private ps: PointageService,) { }

  ngOnInit(): void {
    this.ps.getDMs().subscribe(data => {
      this.demandes = data;
      console.log(data);
    }
    );
    this.ps.getDoss().subscribe(data => {
      this.dossiers = data;
      console.log(data);
    }
    );
  }

  refuser(iddos: number, iddemref: number, refbf:string){
    this.ps.refuser(iddos,iddemref,refbf).subscribe(
      data => {
        console.log(data);
        location.reload();
      },
      err => {   console.log('nope', err)
      }
    );

  }
  accepter(iddos: number, iddemacc: number, refbf:string){
    this.ps.accepter(iddos,iddemacc,refbf).subscribe(
      data => {
        console.log(data);
        location.reload();
      },
      err => {   console.log('nope', err)
      }
    );

  }
  settrue(){
    this.istrue=true
  }
  setfalse(){
    this.istrue=false 
  }

}
