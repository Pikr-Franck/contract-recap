import { Component } from '@angular/core';
import { InternalLink } from '../shared-comp/internal-link/model/internal-link.model';
import { InternalLinkComponent } from "../shared-comp/internal-link/internal-link.component";

@Component({
    selector: 'app-footer',
    standalone: true,
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss',
    imports: [InternalLinkComponent]
})
export class FooterComponent {
  public links: InternalLink[] = [
    {
      route: "/",
      label: "Nous contacter",
    },
    {
      route: "/",
      label: "Mentions légales",
    }
  ]
}
