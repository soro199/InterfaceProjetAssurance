import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodydashbordComponent } from './bodydashbord.component';

describe('BodydashbordComponent', () => {
  let component: BodydashbordComponent;
  let fixture: ComponentFixture<BodydashbordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodydashbordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodydashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
