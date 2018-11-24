import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToZoneAccordionComponent } from './add-to-zone-accordion.component';

describe('AddToZoneAccordionComponent', () => {
  let component: AddToZoneAccordionComponent;
  let fixture: ComponentFixture<AddToZoneAccordionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddToZoneAccordionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToZoneAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
