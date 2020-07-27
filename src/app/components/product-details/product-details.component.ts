import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '@app/shared/mocks';
import { CartService} from '@app/services/cart/cart.service';
import { ProductDefinition } from '@app/shared/interfaces/product/product'
import {ApiService} from '@app/services';
import {ResDefinition} from '@app/shared/interfaces/product/res';

interface ResDefinitionId {
  id: number;
  message: string;
  content: any[];
}

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  myProducts: ProductDefinition[] = [];
  product: ProductDefinition = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService,
    private cartService: CartService,
  ) {
  }

  addToCart(product) {
    window.alert('Ваш продукт добавлен в корзину!');
    this.cartService.addToCart(product);
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
      console.log(this.product.img);

      // this.apiService.getAllProducts().subscribe((res: ResDefinitionId) => {
      //   console.log(res)
      //   this.myProducts = res.content.id;
      // });
    });
  }
}
