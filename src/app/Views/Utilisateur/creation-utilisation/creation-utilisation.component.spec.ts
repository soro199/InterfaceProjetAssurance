import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationUtilisationComponent } from './creation-utilisation.component';

describe('CreationUtilisationComponent', () => {
  let component: CreationUtilisationComponent;
  let fixture: ComponentFixture<CreationUtilisationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationUtilisationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreationUtilisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
