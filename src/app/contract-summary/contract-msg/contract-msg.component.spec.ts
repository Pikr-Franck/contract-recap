import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractMsgComponent } from './contract-msg.component';

describe('ContractMsgComponent', () => {
  let component: ContractMsgComponent;
  let fixture: ComponentFixture<ContractMsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContractMsgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContractMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
