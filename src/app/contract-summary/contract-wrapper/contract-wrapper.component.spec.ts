import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractWrapperComponent } from './contract-wrapper.component';

describe('ContractWrapperComponent', () => {
  let component: ContractWrapperComponent;
  let fixture: ComponentFixture<ContractWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContractWrapperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContractWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
