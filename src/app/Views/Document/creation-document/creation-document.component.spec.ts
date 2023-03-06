import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationDocumentComponent } from './creation-document.component';

describe('CreationDocumentComponent', () => {
  let component: CreationDocumentComponent;
  let fixture: ComponentFixture<CreationDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationDocumentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreationDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
