import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionImageComponent } from './section-image.component';

describe('SectionImageComponent', () => {
  let component: SectionImageComponent;
  let fixture: ComponentFixture<SectionImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionImageComponent]
    });
    fixture = TestBed.createComponent(SectionImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
