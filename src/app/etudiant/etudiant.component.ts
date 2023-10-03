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
  etudiants_liste = Etudiants;
  selectedEtudiant!: Etudiant;
  constructor() {}
  ngOnInit(): void {}

  onSelect(e: Etudiant): void {
    this.selectedEtudiant = e;
  }
}
