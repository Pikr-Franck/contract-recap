import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class FontAwesomeDeclarationModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(
      fas,
      far
    )
  }
}
