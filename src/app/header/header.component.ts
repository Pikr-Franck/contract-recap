import { Component } from '@angular/core';
import { InternalLinkComponent } from "../shared-comp/internal-link/internal-link.component";
import { InternalLink } from '../shared-comp/internal-link/model/internal-link.model';

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    imports: [InternalLinkComponent]
})
export class HeaderComponent {
  public links: InternalLink[] = [
    {
      route: "/",
      label: "Accueil",
      ariaLabel: "retourner sur la page d'accueil du site XXX"
    },
    {
      route: "/",
      label: "Contact",
    }
  ]
}
