import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonLeftRightComponent } from './button-left-right.component';

describe('ButtonLeftRightComponent', () => {
  let component: ButtonLeftRightComponent;
  let fixture: ComponentFixture<ButtonLeftRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonLeftRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonLeftRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
