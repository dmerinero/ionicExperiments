import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the GetStockProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GetStockProvider {
  public data: any;

  constructor(public http: HttpClient) {  }

  loadStock() {
    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      this.http.get('https://api.coredumped.es/product/inStock')
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }
}
