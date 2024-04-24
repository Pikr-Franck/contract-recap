import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InternalLink } from './model/internal-link.model';

@Component({
  selector: 'app-internal-link',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './internal-link.component.html',
  styleUrl: './internal-link.component.scss'
})
export class InternalLinkComponent {
  @Input() internLink!: InternalLink;
}
