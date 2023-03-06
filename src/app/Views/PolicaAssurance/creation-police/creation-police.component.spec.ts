import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationPoliceComponent } from './creation-police.component';

describe('CreationPoliceComponent', () => {
  let component: CreationPoliceComponent;
  let fixture: ComponentFixture<CreationPoliceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationPoliceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreationPoliceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
