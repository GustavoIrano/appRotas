import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { Result } from 'src/app/models/Result.model';
import { Category } from 'src/app/models/category.model';
import { UserUtil } from 'src/app/utils/user.utils';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.css']
})
export class ProdutoListComponent implements OnInit {
  public product: Product;
  public products: Product[];
  public userIsManager: boolean;

  constructor(
    private service: ProductService
  ) { }

  ngOnInit() {

    this.userIsManager = UserUtil.userIsManager();

    this.service.getProducts()
      .subscribe(
        (res: Result) => {
          this.products = res.data;
        },
        (err) => {
          console.log('Erro ao recuperar a lista de produtos!')
          console.log(err);
        }
      );
  }

  select(prod: Product) {
    this.product = prod;
  }

  newProduct() {
    this.product = new Product("", "", 0, "", 0, new Category("", ""));
  }

}
