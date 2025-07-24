import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; // Toujours nécessaire pour les Observables
import { Movie } from '../models/movie.model';
import { ApiResponse } from '../models/api-response.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = 'http://localhost:3000/movies';

  constructor(private http: HttpClient) { }

  // Méthode retournant un Observable
  getMovies(): Observable<ApiResponse<Movie[]>> {
    return this.http.get<ApiResponse<Movie[]>>(this.apiUrl);
  }

  // Optionnel : Une version utilisant async/await pour un code plus linéaire
  // Note : async/await fonctionne avec les Promesses. Pour les Observables,
  // vous auriez besoin de .toPromise() (déprécié) ou de l'aide de 'lastValueFrom' ou 'firstValueFrom'
  // qui ne sont pas forcément le pattern préféré pour le binding direct dans le template.
  // Nous resterons sur l'approche Observable classique qui est plus idiomatique pour Angular.
}
