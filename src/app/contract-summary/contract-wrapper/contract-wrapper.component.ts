import { Component } from '@angular/core';
import { ContractSections } from '../models/contract-sections.model';
import { ContractSectionsComponent } from "../contract-sections/contract-sections.component";
import { ContractMsgComponent } from "../contract-msg/contract-msg.component";
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-contract-wrapper',
    standalone: true,
    templateUrl: './contract-wrapper.component.html',
    styleUrl: './contract-wrapper.component.scss',
    imports: [ContractSectionsComponent, ContractMsgComponent, FormsModule]
})
export class ContractWrapperComponent {
  constructor() {
    // this.modifiedDetailId = '';
    this.modifiedDetailTitle = '';
  }

  contractDetails: ContractSections[] = [
    {
      "title": "Formule choisie",
      "icon": "file-contract",
      "items": [
        {
          "label": "Date de démarrage",
          "name": "12/08/2024"
        },
        {
          "label": "Extensions",
          "name": "Vélo, sport, loisirs, jardins"
        },
        {
          "label": "Type d'indemnisation",
          "name": "Valeur de remplacement à neuf"
        }
      ]
    },
    {
      "title": "Plafonds d'indemnisation",
      "icon": "credit-card",
      "items": [
        {
          "label": "Mobilier",
          "name": "50 000 €"
        },
        {
          "label": "Bijoux et objets précieux",
          "name": "30 000 €"
        },
        {
          "label": "Objets de valeur",
          "name": "60 000 €"
        }
      ]
    },
    {
      "title": "Cotisation",
      "icon": "coins",
      "items": [
        {
          "label": "Montant",
          "name": "51,63 €/mois | 619,56 €/an"
        }
      ]
    },
    {
      "title": "Réductions appliquées sur votre tarif",
      "icon": "percent",
      "items": [
        {
          "label": "Réduction télésurveillance",
          "name": "5% sur votre cotisation <br>grâce à Nexecur"
        },
        {
          "label": "Réduction multi-détention d'options",
          "name": "10% par an sur votre cotisation"
        }
      ]
    },
    {
      "title": "Autres avantages",
      "icon": "gift",
      "items": [
        {
          "label": "Promotion commerciale",
          "name": "2 mois de cotisation offert",
          "url": "#step1"
        },
        {
          "label": "Promotion commerciale",
          "name": "1er mois offert"
        },
        {
          "label": "Promotion commerciale",
          "name": "0 frais de compte"
        }
      ]
    }
  ];

  // public modifiedDetailId: HTMLElement | null;
  public modifiedDetailTitle: string;

  // testAlert(detailName: string, detailId: HTMLElement): void {
  //   console.log(detailName, detailId);
  //   this.modifiedDetailId = (detailId as HTMLElement);
  //   this.modifiedDetailTitle = detailName;
  // }
  public selectedDetail: string = "all";

  onChange(selectedValue: any) {
    this.selectedDetail = selectedValue.target.value;
    console.log("Valeur sélectionnée :", selectedValue.target.value);

  }

  testAlert(detailName: string): void {
    console.log(detailName);
    // this.modifiedDetailId = (detailId as HTMLElement);
    this.modifiedDetailTitle = detailName;
  }
}
