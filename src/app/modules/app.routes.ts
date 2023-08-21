import { NgModule } from '@angular/core';
import { HomeComponent } from '../components/home/home.component';
import { DetailsComponent } from '../components/details/details.component';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from '../components/search/search.component';
import { DetailsActorsComponent } from '../components/details-actors/details-actors.component';
import { DetailsReviewsComponent } from '../components/details-reviews/details-reviews.component';
import { DetailsMoviesComponent } from '../components/details-movies/details-movies.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'details/actors/:id', component: DetailsActorsComponent },
  { path: 'details/reviews/:id', component: DetailsReviewsComponent },
  { path: 'details/movies/:id', component: DetailsMoviesComponent },
  { path: 'search/:movieTitle', component: SearchComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutes {}
