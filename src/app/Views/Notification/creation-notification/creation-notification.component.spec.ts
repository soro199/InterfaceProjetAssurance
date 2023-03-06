import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationNotificationComponent } from './creation-notification.component';

describe('CreationNotificationComponent', () => {
  let component: CreationNotificationComponent;
  let fixture: ComponentFixture<CreationNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationNotificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreationNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
