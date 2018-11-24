import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteZoneAsideComponent } from './favorite-zone-aside.component';

describe('FavoriteZoneAsideComponent', () => {
  let component: FavoriteZoneAsideComponent;
  let fixture: ComponentFixture<FavoriteZoneAsideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoriteZoneAsideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteZoneAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
