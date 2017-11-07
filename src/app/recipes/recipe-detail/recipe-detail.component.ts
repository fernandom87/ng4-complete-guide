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

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.recipe = this.recipeService.getRecipe(+this.route.snapshot.params['id']);
    this.route.params.subscribe(
      (params: Params) => {
        this.recipe = this.recipeService.getRecipe(+params['id']);
      }
    )
  }

  onAddToShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
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
