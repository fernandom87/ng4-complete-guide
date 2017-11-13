import { Subject } from 'rxjs/Subject';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {

  ingredientsChanged = new Subject<Ingredient[]>();

  startedEditing = new Subject();


  ingredients: Ingredient [] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes',10)
  ];

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.getIngredients().slice());
  }

  updateIngredient(index:number, ingredient: Ingredient){
    this.ingredients[index]=ingredient;
    this.ingredientsChanged.next(this.getIngredients().slice());
  }

  addIngredients(ingredients: Ingredient []){
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.getIngredients().slice());
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  deleteIngredient(index: number){
    this.ingredients.splice(index,1);
    this.ingredientsChanged.next(this.getIngredients().slice());
  }

}
