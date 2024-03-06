import { Component } from '@angular/core';
import { ClassiService } from '../service/classi.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  classe: number = 0;
  sezione: string = '';
  laboratorio: boolean = false;
  nomeRappresentante: string = '';
  immagineMascotte: string = '';

  constructor(private classiService: ClassiService) {}

    onClickAggiungi() {
      this.classiService.aggiungiClasse(
        this.classe,
        this.sezione,
        this.laboratorio,
        this.nomeRappresentante,
        this.immagineMascotte
      );
    }
  

}
