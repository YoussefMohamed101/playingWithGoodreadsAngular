import { Injectable } from '@angular/core';
import { AuthorDataService } from './author-data.service';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthorDashboardService {
  constructor(private authorDataService: AuthorDataService) {}
  getAuthors(): Observable<any[]> {
    return this.authorDataService.getAuthors().pipe(
      map((authors: any[]) => {
        return authors.map((author) => {
          let photo!: string;
          const originalPhoto = author.author.photo.split('/');
          if (originalPhoto[0] === 'uploads') {
            photo = originalPhoto[1];
          } else {
            photo = originalPhoto[0];
          }
          const data = {
            id: author.author._id,
            first_name: author.author.first_name,
            last_name: author.author.last_name,
            date_of_birth: author.author.date_of_birth,
            date_of_death: author.author.date_of_death,
            photo: photo,
          };
          return data;
        });
      })
    );
  }
}
