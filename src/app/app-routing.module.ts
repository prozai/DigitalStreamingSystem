import { AddActorProfilePicComponent } from './add-actor-profile-pic/add-actor-profile-pic.component';
import { SearchComponent } from './search/search.component';
import { ListActorComponent } from './list-actor/list-actor.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListMovieComponent } from "./list-movie/list-movie.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { AuthGuardService } from "./service/auth-guard.service";
import { UpdateMovieComponent } from "./update-movie/update-movie.component";
import { AddActorComponent } from './add-actor/add-actor.component';
import { UpdateActorComponent } from './update-actor/update-actor.component';
import { UpdateMovieReviewComponent } from './update-movie-review/update-movie-review.component';
import { ListMovieReviewComponent } from './list-movie-review/list-movie-review.component';
import { AddMovieReviewComponent } from './add-movie-review/add-movie-review.component';

const routes : Routes = [
    // localhost:4200 default route set to login page
    {path : '',redirectTo: 'login', pathMatch: 'full'},
    {path : 'login', component : LoginComponent,},
    // localhost:4200/register
    {path: 'register', component: RegisterComponent},
    
    // ========================Movie Routing=========================

    // navigate list movies component if user is logged in
    {path: 'movies', component: ListMovieComponent, canActivate: [AuthGuardService]},
    // navigate to add movie component if user is logged in
    {path: 'add-movies', component: AddMovieComponent, canActivate: [AuthGuardService]},
    // navigate to update movie component if user is logged in
    {path: 'update-movie/:id', component: UpdateMovieComponent, canActivate: [AuthGuardService]},

    // ========================Actor Routing=========================

    // navigate list actors component if user is logged in
    {path: 'actors', component: ListActorComponent, canActivate: [AuthGuardService]},
    // navigate to add actor component if user is logged in
    {path: 'add-actor', component: AddActorComponent, canActivate: [AuthGuardService]},
    // navigate to update actor component if user is logged in
    {path: 'update-actor/:id', component: UpdateActorComponent, canActivate: [AuthGuardService]},
    // testing component
    {path:'add-actor-profile-pic', component: AddActorProfilePicComponent},
    // ========================Movie Review=========================

    // navigate list movie reviews component if user is logged in
    {path: 'movie-reviews', component: ListMovieReviewComponent, canActivate: [AuthGuardService]},
    // navigate to update movie review component if user is logged in
    {path: 'update-movie-review/:id', component: UpdateMovieReviewComponent, canActivate: [AuthGuardService]},
    // navigate to add movie review component if user is logged in
    {path: 'add-movie-review', component: AddMovieReviewComponent, canActivate: [AuthGuardService]},

    // ========================Search Movie=========================
    {path: 'search-actors', component: SearchComponent, canActivate: [AuthGuardService]},
]

@NgModule({
    // AppRoutingModule is using the RouterModule
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}