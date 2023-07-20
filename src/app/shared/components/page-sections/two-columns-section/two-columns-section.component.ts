import { Component, Input } from '@angular/core';
import { SectionComponent } from '../section/section.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-two-columns-section',
  templateUrl: './two-columns-section.component.html',
  styleUrls: ['./two-columns-section.component.scss'],
})
export class TwoColumnsSectionComponent extends SectionComponent {
  @Input() public imagePosition: string = 'left';
  @Input() public imageUrl: string = 'imageUrl';

  isMobile = false;
  constructor(private responsive: BreakpointObserver) {
    super();
  }
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
