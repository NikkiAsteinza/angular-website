import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSubheaderComponent } from './page-subheader.component';

describe('PageSubheaderComponent', () => {
  let component: PageSubheaderComponent;
  let fixture: ComponentFixture<PageSubheaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageSubheaderComponent]
    });
    fixture = TestBed.createComponent(PageSubheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
