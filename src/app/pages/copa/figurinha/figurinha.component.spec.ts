import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FigurinhaComponent } from './figurinha.component';

describe('FigurinhaComponent', () => {
  let component: FigurinhaComponent;
  let fixture: ComponentFixture<FigurinhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FigurinhaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FigurinhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
