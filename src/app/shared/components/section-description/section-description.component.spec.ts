import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionDescriptionComponent } from './section-description.component';

describe('SectionDescriptionComponent', () => {
  let component: SectionDescriptionComponent;
  let fixture: ComponentFixture<SectionDescriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionDescriptionComponent]
    });
    fixture = TestBed.createComponent(SectionDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
