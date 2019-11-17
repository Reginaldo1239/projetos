import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxEditoriaisComponent } from './box-editoriais.component';

describe('BoxEditoriaisComponent', () => {
  let component: BoxEditoriaisComponent;
  let fixture: ComponentFixture<BoxEditoriaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxEditoriaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxEditoriaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
