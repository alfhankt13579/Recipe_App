import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { recipeList } from 'src/model/RecipeList';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css'],
})
export class EditRecipeComponent implements OnInit {
  editRecipe: any = recipeList;
  id: any = '';
  newIngredient = '';
  newInstruction = '';
  data: any = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private api: ApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data: any) => {
      console.log(data);
      console.log(data.Id);
      this.id = data.Id;

      this.api.viewRecipe(this.id).subscribe((result: any) => {
        console.log(result);
        this.editRecipe = result;
      });
    });
  }

  addIngredientField() {
    if (this.newIngredient) {
      this.editRecipe.ingredients.push(this.newIngredient);
      this.newIngredient = '';
    }
  }

  removeIngredientField(index: number) {
    this.editRecipe.ingredients.splice(index, 1);
  }

  addInstructionField() {
    if (this.newInstruction.trim() !== '') {
      this.editRecipe.instructions.push(this.newInstruction.trim());
      this.newInstruction = '';
    }
  }

  removeInstructionField(index: number): void {
    this.editRecipe.instructions.splice(index, 1);
  }

  updateRecipe() {
    this.api.updateRecipe(this.id, this.editRecipe).subscribe((result: any) => {
      console.log(result);
      this.data = result;
      console.log(this.data);
      this.router.navigateByUrl(`/Recipe View/${this.data.id}`);
    });
  }
}
