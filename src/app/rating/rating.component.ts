import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})

export class RatingComponent {
  math = Math;
  @Input() rating: number;
  onClick(rating: number): void {
    this.rating = rating;
  }
}
