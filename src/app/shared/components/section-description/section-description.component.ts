import { Component, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
@Component({
  selector: 'app-section-description',
  templateUrl: './section-description.component.html',
  styleUrls: ['./section-description.component.scss'],
})
export class SectionDescriptionComponent {
  @Input() public description?: string;
  isMobile = false;
  constructor(private responsive: BreakpointObserver) {}
  ngOnInit(): void {
    this.responsive
      .observe([Breakpoints.HandsetPortrait])
      .subscribe((result) => {
        this.isMobile = false;

        if (result.matches) {
          this.isMobile = true;
        }
      });
  }
}
