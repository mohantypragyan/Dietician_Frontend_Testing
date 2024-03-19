import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtestreportsComponent } from './viewtestreports.component';

describe('ViewtestreportsComponent', () => {
  let component: ViewtestreportsComponent;
  let fixture: ComponentFixture<ViewtestreportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewtestreportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewtestreportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
