import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-recipe-view',
  templateUrl: './recipe-view.component.html',
  styleUrls: ['./recipe-view.component.css']
})
export class RecipeViewComponent implements OnInit {
  
  id: any = '';
  recipeview: any = [];
  ingredients: any = [];
  instructions: any = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private api: ApiService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data: any) => {
      console.log(data);
      console.log(data.Id);
      this.id = data.Id;
      this.api.viewRecipe(this.id).subscribe((result: any) => {
        console.log(result);
        this.recipeview = result;
        console.log(result.ingredients)
        this.ingredients = result.ingredients
        console.log(result.instructions)
        this.instructions = result.instructions
      });
    });
  }
}

