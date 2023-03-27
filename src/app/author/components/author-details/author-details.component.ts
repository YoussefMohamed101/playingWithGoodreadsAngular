import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthorCardModel } from '../../models/author-card.model';
import { AuthorDetailsService } from '../../services/author-details.service';

@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.css'],
})
export class AuthorDetailsComponent implements OnInit {
  authorId: string | undefined;
  authorData: any;
  author!: AuthorCardModel;

  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _AuthorDetailsService: AuthorDetailsService
  ) {}

  ngOnInit() {
    this.authorId = this._ActivatedRoute.snapshot.params['id'];
    this._AuthorDetailsService.getAuthor(this.authorId!).subscribe((data) => {
      this.author = data;
      console.log(data);
    });
  }
}
