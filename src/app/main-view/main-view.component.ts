import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { recipeList } from 'src/model/RecipeList';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css'],
})
export class MainViewComponent implements OnInit {
  allRecipes: recipeList[] = [];

  searchKey1: any = '';

  searchKey2: any = '';

  someRecipes: recipeList[] = [];

  random: any = [];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.allRecipe();
    this.someRecipe();
  }

  allRecipe() {
    this.api.getAllRecipes().subscribe((data) => {
      console.log(data);
      this.allRecipes = data;
    });
  }

  someRecipe() {
    this.api.getAllRecipes().subscribe((data) => {
      console.log(data);
      this.someRecipes = data;
      let random1 = this.someRecipes.splice(
        Math.floor(Math.random() * Object.keys(this.someRecipes).length),
        1
      );
      let random2 = this.someRecipes.splice(
        Math.floor(Math.random() * (Object.keys(this.someRecipes).length - 1)),
        1
      );
      let random3 = this.someRecipes.splice(
        Math.floor(Math.random() * (Object.keys(this.someRecipes).length - 2)),
        1
      );

      console.log(random1[0]);
      console.log(random2[0]);
      console.log(random3[0]);

      this.random = [random1[0], random2[0], random3[0]];

      console.log(this.random);
    });
  }

  search1(event: any) {
    console.log(event.target.value);
    this.searchKey1 = event.target.value;
  }
  search2(event: any) {
    console.log(event.target.value);
    this.searchKey2 = event.target.value;
  }

  deleteRecipe(id: any) {
    this.api.deleteRecipe(id).subscribe((result: any) => {
      alert('Deleted Successfully');
      this.allRecipe();
    });
  }
}
