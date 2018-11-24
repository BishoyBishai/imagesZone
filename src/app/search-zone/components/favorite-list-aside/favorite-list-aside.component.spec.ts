import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteListAsideComponent } from './favorite-list-aside.component';

describe('FavoriteListAsideComponent', () => {
  let component: FavoriteListAsideComponent;
  let fixture: ComponentFixture<FavoriteListAsideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoriteListAsideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteListAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
