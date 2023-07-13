import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-two-columns-section',
  templateUrl: './two-columns-section.component.html',
  styleUrls: ['./two-columns-section.component.scss']
})
export class TwoColumnsSectionComponent {
  @Input() public title:string ="Section title";
  @Input() public description:string ="Section description";
  @Input() public imageUrl:string ="imageUrl";
  @Input() public imagePosition:string = "left";
  @Input() public buttonText:string = "Button text from section";
  @Input() public buttonUrl:string = "Button url from section";
}
