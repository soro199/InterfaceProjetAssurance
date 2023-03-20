import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeSouscriptionComponent } from './liste-souscription.component';

describe('ListeSouscriptionComponent', () => {
  let component: ListeSouscriptionComponent;
  let fixture: ComponentFixture<ListeSouscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeSouscriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeSouscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
