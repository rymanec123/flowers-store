import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '@app/shared/mocks';
import { CartService} from '@app/services/cart/cart.service';
import { ProductDefinition } from '@app/shared/interfaces/product/product'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  myProducts: ProductDefinition[] = products;
  product: ProductDefinition = null;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
  ) { }

  addToCart(product) {
    window.alert('Ваш продукт добавлен в корзину!');
    this.cartService.addToCart(product);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
        this.product = products[+params.get('productId')];
    });
  }

}
