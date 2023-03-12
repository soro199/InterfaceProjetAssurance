import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbardashbordComponent } from './navbardashbord.component';

describe('NavbardashbordComponent', () => {
  let component: NavbardashbordComponent;
  let fixture: ComponentFixture<NavbardashbordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbardashbordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbardashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
