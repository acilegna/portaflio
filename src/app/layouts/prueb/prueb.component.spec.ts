import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebComponent } from './prueb.component';

describe('PruebComponent', () => {
  let component: PruebComponent;
  let fixture: ComponentFixture<PruebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PruebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
