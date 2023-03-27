import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../../models/category';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.css'],
})
export class CategoryCardComponent {
  @Input()
  category!: Category;

  constructor(private _Router: Router) {}
  navigateToGenreBooks(GenreId: string) {
    this._Router.navigate(['/category', GenreId]);
  }
}
