export interface AuthorCardModel {
  id: string;
  first_name: string;
  last_name: string;
  date_of_birth: Date;
  date_of_death: Date;
  photo: string;
  authors_books?: any[];
}
