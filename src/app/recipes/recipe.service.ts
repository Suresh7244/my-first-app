import { ShoppingListService } from './../shoping-list/shopping-list.service';
import { Recipe } from './recipe.model';
import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelcted = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simple a test', 'https://svgsilh.com/svg/23436.svg',
              [
                new Ingredient('meat',1),
                new Ingredient('French Fries',20)
              ]),
    new Recipe('B Test Recipe', 'This is simple b test', 'https://svgsilh.com/svg/23436.svg',
              [
                new Ingredient('bread',1),
                new Ingredient('French Fries',20)
              ]),
    new Recipe('C Test Recipe', 'This is simple c test', 'https://svgsilh.com/svg/23436.svg',
              [
                new Ingredient('buns',1),
                new Ingredient('French Fries',20)
              ])
  ];
  constructor(private slService : ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients)
  }
}
