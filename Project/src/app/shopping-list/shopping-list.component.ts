import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.module'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[]=[
    new Ingredient('Steak', 200),
    new Ingredient('Onions', 20)
  ];
  constructor() { }

  ngOnInit() {
  }
  onIngredientAdd(ingredient: Ingredient){
    this.ingredients.push(ingredient);
  }

}
