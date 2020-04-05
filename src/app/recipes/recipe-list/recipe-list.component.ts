import { Recipe } from './../recipe.model';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe','This is simple a test','https://svgsilh.com/svg/23436.svg'),
    new Recipe('B Test Recipe','This is simple b test','https://svgsilh.com/svg/23436.svg'),
    new Recipe('C Test Recipe','This is simple c test','https://svgsilh.com/svg/23436.svg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe : Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
