import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoColumnsSectionComponent } from './two-columns-section.component';

describe('TwoColumnsSectionComponent', () => {
  let component: TwoColumnsSectionComponent;
  let fixture: ComponentFixture<TwoColumnsSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwoColumnsSectionComponent]
    });
    fixture = TestBed.createComponent(TwoColumnsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
