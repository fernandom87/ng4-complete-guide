import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';


import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';



@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[] ;

  recipesChangedSubscription: Subscription;

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,//current Router
              private router: Router) { }

  ngOnInit() {
    this.recipes=this.recipeService.getRecipes();


    this.recipesChangedSubscription = this.recipeService.recipesChanged.subscribe(
      (recipes: Recipe []) => {
          this.recipes=recipes;
      }
    );
  }

  creteNewRecipe(){
      this.router.navigate(['new'],{relativeTo: this.route});
  }

  ngOnDestroy(){
    this.recipesChangedSubscription.unsubscribe();
  }

}
