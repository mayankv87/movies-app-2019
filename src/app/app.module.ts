import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { NgReduxModule, NgRedux } from '@angular-redux/store';
import { IAppState, rootReducer } from './store/index';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { OwlModule } from 'ngx-owl-carousel';
import {A11yModule} from '@angular/cdk/a11y';
import {
  MatSidenavModule,
  MatButtonModule,
  MatIconModule
} from '@angular/material';
import { RatingComponent } from './rating/rating.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    MovieDetailsComponent,
    MovieSearchComponent,
    CardComponent,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgReduxModule,
    FormsModule,
    OwlModule,
    MatSidenavModule,
    A11yModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    private ngRedux: NgRedux<IAppState>
  ) {

    this.ngRedux.configureStore(
      rootReducer,
      {} as IAppState,
      [ ]
    );

  }
}
