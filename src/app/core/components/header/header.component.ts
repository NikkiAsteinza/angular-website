import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  hideSideMenu = false;
  constructor(private responsive: BreakpointObserver) {}
  ngOnInit(): void {
    this.responsive.observe([
      Breakpoints.HandsetPortrait
      ])
      .subscribe(result => {

        this.hideSideMenu = false; 

        if (result.matches) {
          this.hideSideMenu = true;
        }

  });
  }

}