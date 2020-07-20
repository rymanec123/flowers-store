import { Injectable } from '@angular/core';
import { ProductDefinition } from '@app/shared/interfaces/product/product'

@Injectable({
  providedIn: 'root'
})

export class CartService {
  items = [];

  addToCart(product: ProductDefinition) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}

