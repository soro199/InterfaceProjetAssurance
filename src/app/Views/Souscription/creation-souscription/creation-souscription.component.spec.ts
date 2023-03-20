import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationSouscriptionComponent } from './creation-souscription.component';

describe('CreationSouscriptionComponent', () => {
  let component: CreationSouscriptionComponent;
  let fixture: ComponentFixture<CreationSouscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationSouscriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreationSouscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
