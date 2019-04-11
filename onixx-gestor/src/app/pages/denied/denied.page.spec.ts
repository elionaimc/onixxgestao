import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeniedPage } from './denied.page';

describe('DeniedPage', () => {
  let component: DeniedPage;
  let fixture: ComponentFixture<DeniedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeniedPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeniedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
