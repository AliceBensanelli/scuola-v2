import { Component } from '@angular/core';
import { Classe } from '../model/classe';
import { ClassiService } from '../service/classi.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {

  dati: Classe[];

  constructor(private classiService: ClassiService) {
    this.dati = this.classiService.getClassi();
    this.classiService.classiChanged.subscribe(nuoveClassi => this.dati = nuoveClassi
      )
  }

  onClickVisualizzaDettaglio(classe: Classe) {
    this.classiService.selezionaDettaglio(classe)
  }

}
