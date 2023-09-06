import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArticleComponent } from './article/article.component';
import { FormulairComponent } from './formulair/formulair.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  //{ path: 'home', component: HomeComponent },
  { path: 'article', component: FormulairComponent},
  { path: '**', component :HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
