import { Component, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';
import { Movies } from './../models/movies.model';
import { Observable } from 'rxjs';
import { MoviesAction } from './../actions/movies.action';
import { MoviesSelector } from '../store/selectors';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  movie: any;
  @select() public movies: Observable<Movies>;
  constructor(
    private actions: MoviesAction,
    private selector: MoviesSelector,
    private activatedRoute: ActivatedRoute,
    private route: Router
  ) {}

  playerVars = {
    cc_lang_pref: 'en'
  };
  public player: any;
  public ytEvent: any;

  onStateChange(event: any) {
    this.ytEvent = event.data;
  }
  savePlayer(player: any) {
    this.player = player;
  }

  playVideo() {
    this.player.playVideo();
  }

  pauseVideo() {
    this.player.pauseVideo();
  }
  ngOnInit() {
    this.movies.subscribe(res => {
      const movieList = this.selector.getMoviesList(res);
      if (movieList.length === 0) {
        this.route.navigate(['/movies']);
      }
      const movieId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
      this.movie = this.selector.getMovieById(movieList, movieId);
    });
  }
}
