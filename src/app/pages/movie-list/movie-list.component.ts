import {Component, OnInit} from '@angular/core';
import {NgClass, NgIf, NgStyle} from '@angular/common';
import {StarRatingComponent} from '../../components/star-rating/star-rating.component';
import {MovieService} from '../../services/movie.service';
import {Movie} from '../../models/movie.model';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [
    StarRatingComponent,
    NgStyle

  ],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss'
})
export class MovieListComponent implements OnInit {

  title = 'movies-app';
  movies: Movie[] = [];
  errorMessage: string | null = null;

  // L'injection de dépendances reste la même
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getMoviesFromApi();
  }

  getMoviesFromApi(): void {
    this.movieService.getMovies().subscribe({
      next: (response) => {
        if (response.code === '200' && response.data) {
          this.movies = response.data;
          console.log('Films récupérés :', this.movies);
        } else {
          this.errorMessage = response.message || 'Une erreur inconnue est survenue.';
          console.error('Erreur API :', response.message);
        }
      },
      error: (error) => {
        this.errorMessage = 'Impossible de charger les films. Veuillez vérifier que l\'API est démarrée (node app.js) et accessible à http://localhost:3000/movies.';
        console.error('Erreur lors de l\'appel API :', error);
      }
    });
  }


}
