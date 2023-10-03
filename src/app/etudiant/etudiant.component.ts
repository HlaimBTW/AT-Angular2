import { Component } from '@angular/core';
import { Etudiant } from './Etudiant';
import { Etudiants } from './Etudiant-Liste';
@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent {
    // etudiant = "Halim Choukani"
    etudiants_liste = Etudiants;
    etudiant :Etudiant={
      id:1,
      name:"Halim",
      lastname:"Choukani",
      average:14,
      dateNaissance : new Date("2003-08-24"),
      paye:20
    }
}
