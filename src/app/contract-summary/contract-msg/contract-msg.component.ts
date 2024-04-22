import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-contract-msg',
  standalone: true,
  imports: [],
  templateUrl: './contract-msg.component.html',
  styleUrl: './contract-msg.component.scss'
})
export class ContractMsgComponent {
  @Input() msgId!: HTMLElement;
  @Input() contractSection!: string;
  @Input() desc!: HTMLElement;

  returnToItem(elId: HTMLElement):void {
    elId.focus();
  }
}
