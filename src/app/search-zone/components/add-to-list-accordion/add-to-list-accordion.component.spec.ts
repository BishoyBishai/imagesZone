import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToListAccordionComponent } from './add-to-list-accordion.component';

describe('AddToListAccordionComponent', () => {
  let component: AddToListAccordionComponent;
  let fixture: ComponentFixture<AddToListAccordionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddToListAccordionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToListAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
