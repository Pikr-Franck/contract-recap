import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContractWrapperComponent } from './contract-wrapper.component';

describe('HeaderComponent', () => {
  let component: ContractWrapperComponent;
  let fixture: ComponentFixture<ContractWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContractWrapperComponent],
    }).compileComponents(); // Compiler les composants
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display section titles in dropdown', () => {
    const dropdownItems =
      fixture.nativeElement.querySelectorAll('.dropdown-item');
    expect(dropdownItems.length).toBeGreaterThan(0); // Vérifier que la liste déroulante contient au moins un élément

    dropdownItems.forEach((item: any) => {
      expect(item.textContent.trim()).toBeTruthy(); // Vérifier que chaque élément de la liste déroulante a du texte non vide
    });
  });
});
