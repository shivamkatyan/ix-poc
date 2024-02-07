import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IxDemoComponent } from './ix-demo.component';

describe('IxDemoComponent', () => {
  let component: IxDemoComponent;
  let fixture: ComponentFixture<IxDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IxDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IxDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
