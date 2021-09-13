import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeDockComponent } from './prime-dock.component';

describe('PrimeDockComponent', () => {
  let component: PrimeDockComponent;
  let fixture: ComponentFixture<PrimeDockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimeDockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeDockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
