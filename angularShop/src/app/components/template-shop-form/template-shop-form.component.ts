import { Component, OnInit } from '@angular/core';
import { Shop } from '../../_interface/shop';
import { DataService } from '../../_service/data.service';

@Component({
  selector: 'app-template-shop-form',
  templateUrl: './template-shop-form.component.html',
  styleUrls: ['./template-shop-form.component.sass']
})
export class TemplateShopFormComponent implements OnInit {

  private product$: Shop;

  constructor(
    public _dataService: DataService
  ) {
    this.product$ = {
      description: undefined,
      status: false
    };
  }

  ngOnInit() {
  }

  // Create new ToDo
  public createNewProduct(event: any): void {
    this._dataService.createProducts(this.product$).subscribe((data: Shop) => {
      this._dataService.getGlobalData();
      this.product$ = {
        description: undefined,
        status: false
      };
    }, error => {
      console.log(`%cERROR: ${error.message}`, `color: red; font-size: 12px;`);
    });
  }
}
