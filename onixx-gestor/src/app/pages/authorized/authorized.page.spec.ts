import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizedPage } from './authorized.page';

describe('AuthorizedPage', () => {
  let component: AuthorizedPage;
  let fixture: ComponentFixture<AuthorizedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorizedPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorizedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
