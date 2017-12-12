import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoClienteFornecedoresComponent } from './grupo-cliente-fornecedores.component';

describe('GrupoClienteFornecedoresComponent', () => {
  let component: GrupoClienteFornecedoresComponent;
  let fixture: ComponentFixture<GrupoClienteFornecedoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrupoClienteFornecedoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupoClienteFornecedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
