import { Component, OnInit } from '@angular/core';
import { DataService } from '../_service/data.service';
import { Shop } from '../_interface/shop';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.sass']
})
export class PageListComponent implements OnInit {

  public productShow: boolean;
  public subs = new Subscription();

  constructor(
    public _dataService: DataService
  ) {
    this.productShow = true;
  }

  ngOnInit() {
  }

  public getProducts(): void {
    this._dataService.$products.subscribe((products: Shop[]) => {});
  }

}
