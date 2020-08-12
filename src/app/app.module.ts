import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { ShoppingList } from './shopping-list/shopping-list.component';
import { ShoppingListEdit } from './shopping-list/shopping-list-edit/shopping-list-edit.component';
import { Header } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListItem } from './shopping-list/shopping-list-item/shopping-list-item.component'

@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingList,
    ShoppingListEdit,
    Header,
    RecipesComponent,
    ShoppingListItem
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
