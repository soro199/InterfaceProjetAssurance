import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutPoliceComponent } from './ajout-police.component';

describe('AjoutPoliceComponent', () => {
  let component: AjoutPoliceComponent;
  let fixture: ComponentFixture<AjoutPoliceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutPoliceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutPoliceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
