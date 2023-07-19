import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent {
  @Input() public bgClass:string ="bg-primary";
  @Input() public title:string ="Section title";
  @Input() public description:string ="Section description";
  @Input() public buttonText:string = "Button text from section";
  @Input() public buttonUrl:string = "Button url from section";
  @Input() public showButton:boolean = true;
}
