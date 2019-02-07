import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HubTestePage } from './hub-teste.page';

describe('HubTestePage', () => {
  let component: HubTestePage;
  let fixture: ComponentFixture<HubTestePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HubTestePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HubTestePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
