import { Injectable } from '@angular/core';
//import { Http, Response } from '@angular/http';
import { HttpClient , HttpParams, HttpRequest } from '@angular/common/http';

import 'rxjs/Rx';

import { AuthService } from '../auth/auth.service';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';



@Injectable()
export class DataStorageService {

  constructor(
              //private http: Http,
              private httpClient: HttpClient,
              private recipeService: RecipeService,
              private authService: AuthService){}

  storeRecipes(){
  //  const token = this.authService.getToken();
    /*return this.httpClient.put('https://ng4-complete-guide-98efc.firebaseio.com/recipes.json',this.recipeService.getRecipes(),
    {
      params: new HttpParams().set('auth',token)
    });*/

    const req = new HttpRequest('PUT','https://ng4-complete-guide-98efc.firebaseio.com/recipes.json',this.recipeService.getRecipes(),{
      reportProgress: true
    //  params: new HttpParams().set('auth',token)

    });

    return this.httpClient.request(req);
  }

  getRecipes(){
  //  const token = this.authService.getToken();
    this.httpClient.get<Recipe []>('https://ng4-complete-guide-98efc.firebaseio.com/recipes.json',
      {
      //  params: new HttpParams().set('auth',token)

      })
      .map(
      //  (response: Response) => {
        //  const recipes: Recipe [] = response.json();
        (recipes) => {
          for (let recipe of recipes){
            if (!recipe['ingredients']){
              recipe['ingredients']=[];
            }
          }
          return recipes;
      }
    )
    .subscribe(
      (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
      },
      (error) => console.log(error)
    );
  }

}
