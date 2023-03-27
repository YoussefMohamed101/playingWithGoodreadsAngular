import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthorCardModel } from 'src/app/author/models/author-card.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { AuthorDashboardService } from '../../services/author-dashboard.service';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css'],
})
export class AuthorListComponent implements OnInit {
  authors!: AuthorCardModel[];
  pageSize = 10;
  pageSizeOptions = [5, 10, 20];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource = new MatTableDataSource<AuthorCardModel>(this.authors);
  constructor(private _AuthorDashboardService: AuthorDashboardService) {}
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this._AuthorDashboardService.getAuthors().subscribe((data) => {
      this.authors = data;
      console.log(data);
    });
  }
}
