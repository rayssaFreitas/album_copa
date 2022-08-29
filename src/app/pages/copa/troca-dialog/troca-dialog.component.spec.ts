import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrocaDialogComponent } from './troca-dialog.component';

describe('TrocaDialogComponent', () => {
  let component: TrocaDialogComponent;
  let fixture: ComponentFixture<TrocaDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrocaDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrocaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
