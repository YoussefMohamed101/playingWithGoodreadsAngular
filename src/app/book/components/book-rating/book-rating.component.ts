import { Component, Input, OnInit } from '@angular/core';
import { BookRatingService } from '../../services/book-rating.service';

@Component({
  selector: 'app-book-rating',
  templateUrl: './book-rating.component.html',
  styleUrls: ['./book-rating.component.css']
})
export class BookRatingComponent implements OnInit {
  @Input()
  bookId!: string
  @Input()
  rating!: number
  @Input()
  editable!:boolean

  constructor(private bookRatingService: BookRatingService) { }

  ngOnInit() {
  }
  applyRating() {
    this.bookRatingService.changeBookRating(this.bookId, this.rating).subscribe(data => console.log(data))
  }

}
