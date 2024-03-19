import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadpatientsComponent } from './readpatients.component';

describe('ReadpatientsComponent', () => {
  let component: ReadpatientsComponent;
  let fixture: ComponentFixture<ReadpatientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadpatientsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadpatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
