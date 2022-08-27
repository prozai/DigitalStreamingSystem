import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ListMovieComponent } from './list-movie/list-movie.component';
import { UpdateMovieComponent } from './update-movie/update-movie.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { AddActorComponent } from './add-actor/add-actor.component';
import { ListActorComponent } from './list-actor/list-actor.component';
import { UpdateActorComponent } from './update-actor/update-actor.component';
import { ListMovieReviewComponent } from './list-movie-review/list-movie-review.component';
import { UpdateMovieReviewComponent } from './update-movie-review/update-movie-review.component';
import { AddMovieReviewComponent } from './add-movie-review/add-movie-review.component';
import { SearchComponent } from './search/search.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ListMovieComponent,
    UpdateMovieComponent,
    AddMovieComponent,
    AddActorComponent,
    ListActorComponent,
    UpdateActorComponent,
    ListMovieReviewComponent,
    UpdateMovieReviewComponent,
    AddMovieReviewComponent,
    SearchComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
