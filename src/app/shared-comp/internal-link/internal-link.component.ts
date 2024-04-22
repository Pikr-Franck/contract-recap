import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-internal-link',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './internal-link.component.html',
  styleUrl: './internal-link.component.scss'
})
export class InternalLinkComponent {
  @Input() route!: string;
  @Input() label!: string;
  @Input() ariaLabel?: string;
}
