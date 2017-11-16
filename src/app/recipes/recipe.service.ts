import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class RecipeService {

  recipesChanged = new Subject<Recipe []>();

  private recipes: Recipe[] =[
    new Recipe(
      'Carrot-Ricotta-Salad',
      'Carrot-Ricotta-Salad',
      'http://www.seriouseats.com/recipes/assets_c/2016/05/20160503-fava-carrot-ricotta-salad-recipe-1-thumb-1500xauto-431710.jpg',
      [ new Ingredient('Carrot', 2),
        new Ingredient('Extra-virgin olive oil', 2)
      ]
    ),
    new Recipe(
      'Mexican Chicken',
      'Mexican Chicken',
      'http://img.taste.com.au/2rTvVECZ/taste/2016/11/one-pan-mexican-chicken-78891-1.jpeg',
      [ new Ingredient('Onion', 2),
        new Ingredient('Chicken', 1),
        new Ingredient('Spice', 1),
        new Ingredient('Rice', 1)
      ]

    )


  ];

  constructor(private slService: ShoppingListService){}

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
  }

  getRecipes(){
    return this.recipes.slice();// retur new array - copy
  }

  getRecipe(index: number){
      return this.recipes[index];
  }

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  setRecipes(recipes: Recipe [] ){
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, recipe: Recipe){
    this.recipes[index]=recipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number){
    this.recipes.splice(index,1);
    this.recipesChanged.next(this.recipes.slice());

  }

}
