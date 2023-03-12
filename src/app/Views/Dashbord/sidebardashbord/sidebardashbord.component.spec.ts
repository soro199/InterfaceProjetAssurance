import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebardashbordComponent } from './sidebardashbord.component';

describe('SidebardashbordComponent', () => {
  let component: SidebardashbordComponent;
  let fixture: ComponentFixture<SidebardashbordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebardashbordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebardashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
