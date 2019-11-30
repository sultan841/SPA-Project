import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UmkdComponent } from './umkd.component';

describe('UmkdComponent', () => {
  let component: UmkdComponent;
  let fixture: ComponentFixture<UmkdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UmkdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UmkdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
