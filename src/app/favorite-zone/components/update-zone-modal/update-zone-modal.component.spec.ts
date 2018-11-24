import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateZoneModalComponent } from './update-zone-modal.component';

describe('UpdateZoneModalComponent', () => {
  let component: UpdateZoneModalComponent;
  let fixture: ComponentFixture<UpdateZoneModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateZoneModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateZoneModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
