import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contract-msg',
  standalone: true,
  imports: [],
  templateUrl: './contract-msg.component.html',
  styleUrl: './contract-msg.component.scss'
})
export class ContractMsgComponent {
  @Input() msgId!: string;
  @Input() contractSection!: string;
  @Input() desc!: string;

  returnToItem(elId: any):void {
    elId.focus();
  }
}
