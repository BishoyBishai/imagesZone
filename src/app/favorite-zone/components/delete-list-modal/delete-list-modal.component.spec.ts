import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteListModalComponent } from './delete-list-modal.component';

describe('DeleteListModalComponent', () => {
  let component: DeleteListModalComponent;
  let fixture: ComponentFixture<DeleteListModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteListModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteListModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
