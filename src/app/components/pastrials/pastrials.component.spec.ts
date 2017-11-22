import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastrialsComponent } from './pastrials.component';

describe('PastrialsComponent', () => {
  let component: PastrialsComponent;
  let fixture: ComponentFixture<PastrialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastrialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastrialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
