import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-image',
  templateUrl: './section-image.component.html',
  styleUrls: ['./section-image.component.scss']
})
export class SectionImageComponent {
  @Input() public imageUrl: string = 'imageUrl';
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
