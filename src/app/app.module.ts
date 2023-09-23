import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { DetailsComponent } from './components/details/details.component';
import { NotAuthorizedComponent } from './components/not-authorized/not-authorized.component';
import { SearchComponent } from './components/search/search.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ModalComponent } from './components/modal/modal.component';
import { DetailsMoviesComponent } from './components/details-movies/details-movies.component';
import { DetailsReviewsComponent } from './components/details-reviews/details-reviews.component';
import { DetailsActorsComponent } from './components/details-actors/details-actors.component';
import { AppRoutes } from './modules/app.routes';

import { NotFoundComponent } from './components/not-found/not-found.component';
import { HeaderDirective } from './directives/header.directive';
import { MyIfDirective } from './directives/my-if.directive';
import { MoviesService } from './services/movies.service';
import { GlobalErrorHander } from './services/global-error-handler.service';
import { FeedbackComponent } from './components/feedback/feedback.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    DetailsComponent,
    NotAuthorizedComponent,
    SearchComponent,
    LoaderComponent,
    ModalComponent,
    DetailsMoviesComponent,
    DetailsReviewsComponent,
    DetailsActorsComponent,
    NotFoundComponent,
    FeedbackComponent,
    
    //Directive
    HeaderDirective,
    MyIfDirective,
    
  ],
  imports: [BrowserModule, AppRoutes, FormsModule, HttpClientModule],
  providers: [
    MoviesService,
    { provide: ErrorHandler, useClass: GlobalErrorHander },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
