import { Component, Input } from '@angular/core';
import { SectionComponent } from '../section/section.component';

@Component({
  selector: 'app-two-columns-section',
  templateUrl: './two-columns-section.component.html',
  styleUrls: ['./two-columns-section.component.scss']
})
export class TwoColumnsSectionComponent extends SectionComponent {

  @Input() public imagePosition:string = "left";
  @Input() public imageUrl:string ="imageUrl";
}
