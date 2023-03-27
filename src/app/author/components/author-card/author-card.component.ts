import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorCardModel } from 'src/app/author/models/author-card.model';

@Component({
  selector: 'app-author-card',
  templateUrl: './author-card.component.html',
  styleUrls: ['./author-card.component.css'],
})
export class AuthorCardComponent {
  @Input() author!: AuthorCardModel;

  constructor(private _Router: Router) {}
  navigateToAuthorDetails(AuthorId: string) {
    this._Router.navigate(['/author', AuthorId]);
  }
}
