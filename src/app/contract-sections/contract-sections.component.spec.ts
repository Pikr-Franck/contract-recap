import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractSectionsComponent } from './contract-sections.component';

describe('ContractSectionsComponent', () => {
  let component: ContractSectionsComponent;
  let fixture: ComponentFixture<ContractSectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContractSectionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContractSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
