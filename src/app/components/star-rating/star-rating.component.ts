import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-star-rating',
  imports: [
    NgClass
  ],
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.scss'
})
export class StarRatingComponent {

  @Input() rating: number = 0;

  /**
   * Retourne la classe CSS Font Awesome à appliquer à une étoile de notation.
   * Utilisé pour afficher des étoiles pleines, demi, ou vides selon la note du film.
   *
   * @param index - Position de l’étoile (1 à 5)
   * @param rating - Note du film (ex: 3.5)
   * @returns Classe Font Awesome : 'fas fa-star', 'fas fa-star-half-stroke' ou 'far fa-star'
   */
  getStarClass(index: number, rating: number): string {
    if (index <= Math.floor(rating)) return 'fas fa-star';                  // étoile pleine
    else if (index - 0.5 === rating) return 'fas fa-star-half-stroke';     // demi-étoile
    else return 'far fa-star';                                               // vide
  }
}
