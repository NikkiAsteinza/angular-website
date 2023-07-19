import { Component, OnInit, Output } from '@angular/core';
import { RecipeI } from 'src/app/core/interfaces/recipes-interface';
import { RecipesApiService } from 'src/app/core/services/recipes-api/recipes-api.service';

@Component({
  selector: 'app-specialties',
  templateUrl: './specialties.component.html',
  styleUrls: ['./specialties.component.scss']
})
export class SpecialtiesComponent implements OnInit{
    @Output() recipes = new Array<RecipeI>;

    constructor(
      private recipesApiService :RecipesApiService
    ){
      this.recipes = new Array<RecipeI>;
    }
  
    ngOnInit(): void {
      
      this.recipesApiService.getProducts().subscribe((result)=>{
        result.forEach(data => {
            this.recipes.push(data)
        });
        console.log("Mapped recipes");
        console.log(this.recipes);
      })
      
    }
}
