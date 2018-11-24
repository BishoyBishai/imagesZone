import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteZoneFormComponent } from './favorite-zone-form.component';

describe('FavoriteZoneFormComponent', () => {
  let component: FavoriteZoneFormComponent;
  let fixture: ComponentFixture<FavoriteZoneFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoriteZoneFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteZoneFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
