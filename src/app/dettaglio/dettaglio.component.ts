import { Component } from '@angular/core';
import { Classe } from '../model/classe';
import { ClassiService } from '../service/classi.service';

@Component({
  selector: 'app-dettaglio',
  templateUrl: './dettaglio.component.html',
  styleUrls: ['./dettaglio.component.css']
})
export class DettaglioComponent {

  classe? : Classe;

  constructor(private classiService: ClassiService) {
    this.classiService.classeSelezionataChanged
    .subscribe(classeSelezionata => this.classe = classeSelezionata);
  }

}
