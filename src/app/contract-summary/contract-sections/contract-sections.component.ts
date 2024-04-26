import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ContractSections } from '../models/contract-sections.model';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-contract-sections',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './contract-sections.component.html',
  styleUrl: './contract-sections.component.scss'
})
export class ContractSectionsComponent {
  @Input() contractId!: string;
  @Input() contractSection!: ContractSections;
  @Input() hasModifiedBtn?: boolean = true;
  @Output() btnClick = new EventEmitter<any>();
}
