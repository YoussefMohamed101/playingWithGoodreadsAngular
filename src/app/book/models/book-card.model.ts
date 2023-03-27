import { AuthorCardModel } from 'src/app/author/models/author-card.model';

export interface BookCardModel {
  _id: string;
  author_name: string;
  title: string;
  coverImage: string;
  summary: string;
}
