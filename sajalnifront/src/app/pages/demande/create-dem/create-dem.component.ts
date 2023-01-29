import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Demande } from 'src/app/Models/demande';
import { DemandeService } from 'src/app/services/demande.service';


@Component({
  selector: 'app-create-dem',
  templateUrl: './create-dem.component.html',
  styleUrls: ['./create-dem.component.css']
})
export class CreateDemComponent implements OnInit {
  demande: Demande = new Demande();
  constructor(private ds: DemandeService,
    private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.ds.adddm(this.demande).subscribe( data =>{
     
      console.log(data);
      this.router.navigate(['/demandeClient']);
    },
    error => console.log(error));
 console.log(this.demande);
  }

}
