import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddArticleComponent } from './add-article/add-article.component';

import { AddProviderComponent } from './add-provider/add-provider.component';
import { ListArticleComponent } from './list-article/list-article.component';
import { ListProviderComponent } from './list-provider/list-provider.component';
import { UpdateArticleComponent } from './update-article/update-article.component';
import { UpdateProviderComponent } from './update-provider/update-provider.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "app-navbar" },
  { path: "listProvider", component: ListProviderComponent },
  { path: "addProvider", component: AddProviderComponent },
  { path: "updateProvider/:id", component: UpdateProviderComponent },

  { path: "listArticle", component: ListArticleComponent },
  { path: "addArticle", component: AddArticleComponent },
  { path: "updateProvider/:id", component: UpdateArticleComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
