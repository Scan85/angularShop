import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Shop } from '../../_interface/shop';
import { DataService } from '../../_service/data.service';

@Component({
  selector: 'app-template-shop',
  templateUrl: './template-shop.component.html',
  styleUrls: ['./template-shop.component.sass']
})
export class TemplateShopComponent implements OnInit {

  @Input() shop$: Shop;
  @Output() ping: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    public _dataService: DataService
  ) { }

  ngOnInit() { }

  // Function to update the Label
  public changeProductName(event?: any): void {
    this._dataService.changeProducts(this.shop$).subscribe((data: Shop) => {
        this._dataService.getGlobalData();
    }, error => {
        console.log(`%cERROR: ${error.message}`, `color: red; font-size: 12px;`);
    });
}

// Function
public changeCheck(event?: any): void {
    this.shop$.status = !this.shop$.status;
    this._dataService.changeProducts(this.shop$).subscribe((data: Shop) => {
        this._dataService.getGlobalData();
    }, error => {
        console.log(`%cERROR: ${error.message}`, `color: red; font-size: 12px;`);
    });
}

// Function to Delete this Element
public deleteProduct(): void {
    this._dataService.deleteProduct(this.shop$).subscribe((data: Shop) => {
        this._dataService.getGlobalData();
    }, error => {
        console.log(`%cERROR: ${error.message}`, `color: red; font-size: 12px;`);
    });
}
}
