import { Component, Input } from '@angular/core';
import { IconsEnum } from './models/icons.model';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss'
})
export class IconComponent {
  @Input() widh? = 24;
  @Input() iconId!: IconsEnum;
  @Input() color?: string;
}
