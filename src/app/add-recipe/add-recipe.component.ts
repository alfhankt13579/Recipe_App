import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css'],
})
export class AddRecipeComponent {
  newRecipe: any = {
    title: "",
    description: "",
    ingredients: [],
    instructions: [],
    imageUrl: "",
  };
  newIngredient = '';
  newInstruction = '';
  data: any = {};

  constructor(private api: ApiService, private router: Router) {}

  addIngredientField() {
    if (this.newIngredient !== '') {
      this.newRecipe.ingredients.push(this.newIngredient);
      this.newIngredient = '';
    }
  }

  removeIngredientField(index: number) {
    this.newRecipe.ingredients.splice(index, 1);
  }

  addInstructionField() {
    this.newRecipe.instructions.push(this.newInstruction);
    this.newInstruction = '';
  }

  removeInstructionField(index: number) {
    this.newRecipe.instructions.splice(index, 1);
  }

  addRecipe(): void {
    this.api.addRecipe(this.newRecipe).subscribe((recipes) => {
      console.log(recipes);
      this.data = recipes;
      console.log(this.data);
      this.router.navigateByUrl(`/Recipe View/${this.data.id}`);
    });
  }
}
