import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeDeclarationModule } from './shared-comp/font-awesome-declaration/font-awesome-declaration.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconComponent } from "./shared-comp/icon/icon.component";
import { IconsEnum } from './shared-comp/icon/models/icons.model';
import { InternalLinkComponent } from "./shared-comp/internal-link/internal-link.component";
import { ContractWrapperComponent } from "./contract-summary/contract-wrapper/contract-wrapper.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, FontAwesomeModule, FontAwesomeDeclarationModule, IconComponent, InternalLinkComponent, ContractWrapperComponent]
})
export class AppComponent {
  title = 'contract-recapitulation';
  iconListEnum: typeof IconsEnum = IconsEnum;
}
