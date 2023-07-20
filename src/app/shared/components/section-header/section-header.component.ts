import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.scss']
})
export class SectionHeaderComponent {
  @Input() public title:string ="Section title";
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
