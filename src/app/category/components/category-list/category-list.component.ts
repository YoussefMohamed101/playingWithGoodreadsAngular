import { Component } from '@angular/core';
import { Category } from '../../models/category';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
})
export class CategoryListComponent {
  categories!: Category[];
  constructor(private _categoryService: CategoryService) {}
  ngOnInit() {
    this._categoryService.getCategories().subscribe((data) => {
      this.categories = data;
      console.log(data);
    });
  }
}
