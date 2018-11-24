import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToZoneModalComponent } from './add-to-zone-modal.component';

describe('AddToZoneModalComponent', () => {
  let component: AddToZoneModalComponent;
  let fixture: ComponentFixture<AddToZoneModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddToZoneModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToZoneModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
