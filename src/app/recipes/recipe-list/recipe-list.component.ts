import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] =[
    new Recipe('Carrot-Ricotta-Salad','This is simply a test','http://www.seriouseats.com/recipes/assets_c/2016/05/20160503-fava-carrot-ricotta-salad-recipe-1-thumb-1500xauto-431710.jpg'),
    new Recipe('A Test Recipe','This is simply a test','http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg'),
    new Recipe('Mexican Chicken','This is simply a test','http://img.taste.com.au/2rTvVECZ/taste/2016/11/one-pan-mexican-chicken-78891-1.jpeg')


  ];

  constructor() { }

  ngOnInit() {
  }

}
