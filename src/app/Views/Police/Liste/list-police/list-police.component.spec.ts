import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPoliceComponent } from './list-police.component';

describe('ListPoliceComponent', () => {
  let component: ListPoliceComponent;
  let fixture: ComponentFixture<ListPoliceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPoliceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPoliceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
