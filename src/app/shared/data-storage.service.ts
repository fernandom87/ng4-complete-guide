import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from '@angular/http';

import { RecipeService } from '../recipes/recipe.service';

@Injectable()
export class DataStorageService {

  constructor(private http: Http, private recipeService: RecipeService){}

  storeRecipes(){
    return this.http.put('https://ng4-complete-guide-98efc.firebaseio.com/recipes.json',this.recipeService.getRecipes());
  }

  getRecipes(){
    return this.http.get('https://ng4-complete-guide-98efc.firebaseio.com/recipes.json')
    .subscribe(
      (response: Response) => {
          const recipes = response.json();
          this.recipeService.setRecipes(recipes);
      },
      (error) => console.log(error)
    );
  }

}
