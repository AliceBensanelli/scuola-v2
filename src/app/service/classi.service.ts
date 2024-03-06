import { Injectable } from "@angular/core";
import { Classe } from "../model/classe";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ClassiService {
    private classi: Classe[] = [
        {
            id:1,
            classe: 1,
            sezione: 'A',
            laboratorio: false,
            nomeRappresentante: 'Paolo',
            immagineMascotte: 'https://m.media-amazon.com/images/I/61xsc9XTOPL.jpg'
        },
        {
            id: 2,
            classe: 5,
            sezione: 'C',
            laboratorio: true,
            nomeRappresentante: 'Carla',
            immagineMascotte: 'https://www.figc.it/media/139386/mascotte-italia_sfondo-blu-light.jpg'
        },
    ];

    getClassi() {
        return this.classi.slice();
    }

    classeSelezionataChanged = new Subject<Classe>();

    ultimoId = 3;

    aggiungiClasse(
        classe: number,
        sezione: string,
        laboratorio: boolean,
        nomeRappresentante: string,
        immagineMascotte: string
    ) {
        const nuovaClasse: Classe = {
            id: this.ultimoId++,
            classe,
            sezione,
            laboratorio,
            nomeRappresentante,
            immagineMascotte
        };
        this.classi.push(nuovaClasse);
        this.classiChanged.next(this.classi.slice());
    }

    classiChanged = new Subject<Classe[]>();

    selezionaDettaglio(classe: Classe) {
        this.classeSelezionataChanged.next(classe)
    }
}