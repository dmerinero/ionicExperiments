import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../../pages/item-details/item-details';

import { GetStockProvider } from '../../providers/get-stock/get-stock';

import { Product } from '../../models/Product'

/**
 * Generated class for the ProductComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'product',
  templateUrl: 'product.html'
})
export class ProductComponent {

  items: Array<Product>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private stockList: GetStockProvider) {
    this.loadStock();
  }

  loadStock(){
    this.stockList.loadStock()
    .then(data => {
      this.items = data;
    });
  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }

}
