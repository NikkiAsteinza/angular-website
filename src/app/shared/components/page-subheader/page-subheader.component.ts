import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-subheader',
  templateUrl: './page-subheader.component.html',
  styleUrls: ['./page-subheader.component.scss']
})
export class PageSubheaderComponent {
  @Input() public title:string ="Section title";
  @Input() public description:string ="Section description";
  @Input() public imageUrl:string ="imageUrl";
}
