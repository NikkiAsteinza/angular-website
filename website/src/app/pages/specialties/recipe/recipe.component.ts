import { Component, Input } from '@angular/core';
import { RecipeI } from 'src/app/core/interfaces/recipes-interface';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent {
@Input() public data?: RecipeI;
}
