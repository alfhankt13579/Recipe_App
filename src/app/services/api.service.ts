import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { recipeList } from 'src/model/RecipeList';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getAllRecipes(): Observable<recipeList[]> {
    return this.http.get<recipeList[]>('https://localhost:3000/recipes');
  }

  viewRecipe(id: number): Observable<recipeList> {
    return this.http.get<recipeList>(`https://localhost:3000/recipes/${id}`);
  }

  addRecipe(recipe: recipeList): Observable<recipeList> {
    return this.http.post<recipeList>(`https://localhost:3000/recipes`, recipe);
  }

  updateRecipe(id: number, recipe: recipeList): Observable<recipeList> {
    return this.http.put<recipeList>(
      `https://localhost:3000/recipes/${id}`,
      recipe
    );
  }

  deleteRecipe(id: number): Observable<{}> {
    return this.http.delete(`https://localhost:3000/recipes/${id}`);
  }
}
