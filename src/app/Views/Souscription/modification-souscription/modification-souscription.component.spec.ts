import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificationSouscriptionComponent } from './modification-souscription.component';

describe('ModificationSouscriptionComponent', () => {
  let component: ModificationSouscriptionComponent;
  let fixture: ComponentFixture<ModificationSouscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificationSouscriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificationSouscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
