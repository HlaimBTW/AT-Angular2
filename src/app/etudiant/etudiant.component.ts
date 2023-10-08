import { Component } from '@angular/core';
import { Etudiant } from './Etudiant';
import { Etudiants } from './Etudiant-Liste';
@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css'],
})
export class EtudiantComponent {
  // etudiant = "Halim Choukani"
  // classChange(){
  //   let card = document.getElementsByClassName('card')[0];
  //   card.classList.add("shakeActive");
  // }
  // classRestor(){
  //   let card = document.getElementsByClassName('card')[0];
  //   card.classList.remove("shakeActive");
  // }
  idClicked = false;
  nameClicked = false;
  lnameClicked = false;
  dateClicked = false;
  avgClicked = false;
  payClicked = false;
  etudiants_liste = Etudiants;
  selectedEtudiant!: Etudiant;
  constructor() {}
  ngOnInit(): void {}

  onSelect(e: Etudiant): void {
    this.selectedEtudiant = e;
  }
}
