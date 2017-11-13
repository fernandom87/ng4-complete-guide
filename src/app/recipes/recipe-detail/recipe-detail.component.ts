import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute , Router, Params } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe;
  index: number;

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.index = +this.route.snapshot.params['id'];
    this.recipe = this.recipeService.getRecipe(this.index);
    this.route.params.subscribe(
      (params: Params) => {
        this.index = params['id'];
        this.recipe = this.recipeService.getRecipe(this.index);
      }
    )
  }

  onAddToShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onDeleteRecipe(){
    this.recipeService.deleteRecipe(this.index);
    this.router.navigate(['/recipes']);
  }

  onEditRecipe(){
    /*this.router.navigate(
      ['/servers',this.server.id,'edit'],
      {
        queryParams: {allowEdit: '1'},
        fragment: 'loading'
      }
    );*/
    this.router.navigate(['edit'],{relativeTo: this.route, queryParamsHandling: 'preserve'});


  }

}
