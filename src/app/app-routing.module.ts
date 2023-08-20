import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MainViewComponent } from './main-view/main-view.component';
import { RecipeViewComponent } from './recipe-view/recipe-view.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';

const routes: Routes = [
  { path: '', redirectTo: 'Main View', pathMatch: 'full' },
  { path: 'Main View', component: MainViewComponent },
  { path: 'Recipe View/:Id', component: RecipeViewComponent },
  { path: 'Add Recipe', component: AddRecipeComponent },
  { path: 'Edit Recipe/:Id', component: EditRecipeComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
