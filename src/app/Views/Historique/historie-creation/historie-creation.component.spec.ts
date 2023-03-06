import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorieCreationComponent } from './historie-creation.component';

describe('HistorieCreationComponent', () => {
  let component: HistorieCreationComponent;
  let fixture: ComponentFixture<HistorieCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistorieCreationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistorieCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
