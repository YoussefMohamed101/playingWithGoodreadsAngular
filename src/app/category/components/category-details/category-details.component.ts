import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { BookCardModel } from '../../../book/models/book-card.model';
import { CategoryService } from '../../services/category.service';
import { Observable, map } from 'rxjs';
import { Category } from '../../models/category';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css'],
})
export class CategoryDetailsComponent {
  books!: BookCardModel[];
  genre!: Category;
  genreId!: string;
  pageSize = 10;
  pageSizeOptions = [5, 10, 20];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource = new MatTableDataSource<BookCardModel>(this.books);
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private _CategoryService: CategoryService
  ) {}
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.genreId = this.route.snapshot.params['id'];
    this._CategoryService
      .getCategoryDetails(this.genreId)
      .pipe(
        map((genre: any) => {
          genre.genre_books = genre.genre_books.map((book: any) => {
            //sanitize the data
            let coverImage!: string;
            const originalCoverImage = book.coverImage.split('/');
            if (originalCoverImage[0] === 'uploads') {
              coverImage = originalCoverImage[1];
            } else {
              coverImage = originalCoverImage[0];
            }

            //then return
            return {
              _id: book._id,
              title: book.title,
              coverImage: coverImage,
              summary: book.summary,
              isbn: book.isbn,
              avgrating: book.avgrating,
            };
          });

          return genre;
        })

        // map((genre: any) => {
        //   for (const book of genre.genre_books) console.log(book);
        // })
      )
      .subscribe((data) => {
        this.genre = data.genre;
        this.books = data.genre_books;
        console.log(data);
      });
  }
  navigateToBookDetails(bookId: string) {
    this.router.navigate(['/book', bookId]);
  }
}
