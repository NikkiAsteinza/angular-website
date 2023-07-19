import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneColumnsSectionComponent } from './one-columns-section.component';

describe('OneColumnsSectionComponent', () => {
  let component: OneColumnsSectionComponent;
  let fixture: ComponentFixture<OneColumnsSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OneColumnsSectionComponent]
    });
    fixture = TestBed.createComponent(OneColumnsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
