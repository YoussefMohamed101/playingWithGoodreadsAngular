import { Injectable } from '@angular/core';
import { AuthorDataService } from './author-data.service';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthorDetailsService {
  constructor(private _AuthorDataService: AuthorDataService) {}
  getAuthor(authorId: string): Observable<any> {
    return this._AuthorDataService.getAuthor(authorId).pipe(
      map((author: any) => {
        //sanitize the data
        let photo!: string;
        let originalPhoto: any = author.author.photo.split('/');
        if (originalPhoto[0] === 'uploads') {
          photo = originalPhoto[1];
        } else {
          photo = originalPhoto[0];
        }

        for (const book of author.authors_books) {
          originalPhoto = book.coverImage.split('/');
          if (originalPhoto[0] === 'uploads') {
            book.coverImage = originalPhoto[1];
          } else {
            book.coverImage = originalPhoto[0];
          }
        }

        return {
          id: author.author._id,
          first_name: author.author.first_name,
          last_name: author.author.last_name,
          date_of_birth: author.author.date_of_birth,
          date_of_death: author.author.date_of_death,
          photo: photo,
          authors_books: author.authors_books,
        };
      })
    );
  }
}
