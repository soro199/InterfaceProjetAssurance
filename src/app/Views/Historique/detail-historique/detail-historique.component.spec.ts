import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailHistoriqueComponent } from './detail-historique.component';

describe('DetailHistoriqueComponent', () => {
  let component: DetailHistoriqueComponent;
  let fixture: ComponentFixture<DetailHistoriqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailHistoriqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailHistoriqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
