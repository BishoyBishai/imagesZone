import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteListFormComponent } from './favorite-list-form.component';

describe('FavoriteListFormComponent', () => {
  let component: FavoriteListFormComponent;
  let fixture: ComponentFixture<FavoriteListFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoriteListFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteListFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
