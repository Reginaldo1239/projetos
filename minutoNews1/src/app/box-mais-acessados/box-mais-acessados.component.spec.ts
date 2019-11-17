import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxMaisAcessadosComponent } from './box-mais-acessados.component';

describe('BoxMaisAcessadosComponent', () => {
  let component: BoxMaisAcessadosComponent;
  let fixture: ComponentFixture<BoxMaisAcessadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxMaisAcessadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxMaisAcessadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
