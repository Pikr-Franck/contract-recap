import { AfterViewChecked, Component } from '@angular/core';
import { ContractSections } from '../models/contract-sections.model';
import { ContractSectionsComponent } from "../contract-sections/contract-sections.component";
import { ContractMsgComponent } from "../contract-msg/contract-msg.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-contract-wrapper',
    standalone: true,
    templateUrl: './contract-wrapper.component.html',
    styleUrl: './contract-wrapper.component.scss',
    imports: [ContractSectionsComponent, ContractMsgComponent, FormsModule, CommonModule]
})
export class ContractWrapperComponent implements AfterViewChecked {
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

  public selectedDetail: string = "allDetails";

  public modifiedDetailTitle: string = '';
  public modifiedDetailId: string = '';


  onChange(selectedValue: any) {
    this.selectedDetail = selectedValue.target.value;
  }

  getContractDetailByTitle(title: string): ContractSections {
    const contractDetail = this.contractDetails.find(detail => detail.title === title);
    if (!contractDetail) {
      throw new Error(`Contract detail with title '${title}' not found`);
    }
    return contractDetail;
  }

  public detailStatusId: any = 'contractDetailStatus';

  setSelectedDetail(detailId: any, detailName: string): void {
    this.modifiedDetailId = detailId;
    this.modifiedDetailTitle = detailName;
    const selectedDetailStatus: any = document.querySelector("#" + this.detailStatusId + " button");
    if (selectedDetailStatus) {
      selectedDetailStatus.focus();
    }
  }

  formatString(input: string): string {
    const formattedString = input.replace(/[^a-zA-Z]/g, '');
    const lowercaseString = formattedString.toLowerCase();
    return lowercaseString;
  }

  public isFirstLaunched: boolean = true;

  ngAfterViewChecked() {
    const lastItemBtn: any = document.querySelector("app-contract-sections:last-of-type button");
    if (lastItemBtn && this.isFirstLaunched) {
      lastItemBtn.focus();
      this.isFirstLaunched = false;
    }
  }
}
