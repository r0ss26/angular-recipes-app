import { Component, Input } from '@angular/core'
import { Ingredient } from '../../shared/ingredient.model'

@Component({
  selector: 'app-shopping-list-item',
  templateUrl: './shopping-list-item.component.html'
})
export class ShoppingListItem {
  @Input() ingredient: Ingredient;
}