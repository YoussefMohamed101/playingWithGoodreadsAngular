import { Category } from 'src/app/category/models/category';
import { AuthorCardModel } from '../../author/models/author-card.model';
import { Review } from './review';
import { User } from 'src/app/user/models/user';
import { Rating } from './rating';

export interface Book {
  _id: string;
  title: string;
  summary: string;
  isbn: string;
  author: AuthorCardModel[];
  genre: Category[];
  coverImage: string;
  reviews: Review[];
  ratings: Rating[];
  wantToRead: User[];
  read: User[];
  currentlyReading: User[];
}
