import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

  recipes: Recipe[];

  constructor(
    private recipesService: RecipesService,
    private router: Router
  ) { }

  ngOnInit() {
    // subscribe to router events 
    // otherwise the this.recipes array won't get updated in the view when an item is deleted from a child route
    // see recipe-detail.page.ts line:47
    this.router.events.subscribe(() => {
      this.recipes = this.recipesService.getAllRecipes();
    });
  }

}
