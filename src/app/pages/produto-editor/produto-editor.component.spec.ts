import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoEditorComponent } from './produto-editor.component';

describe('ProdutoEditorComponent', () => {
  let component: ProdutoEditorComponent;
  let fixture: ComponentFixture<ProdutoEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutoEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
