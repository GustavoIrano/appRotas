import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { CategoryService } from 'src/app/services/category.service';
import { CustomValidator } from 'src/app/validators/custom.validator';
import { Category } from 'src/app/models/category.model';
import { Product } from 'src/app/models/product.model';
import { Result } from 'src/app/models/Result.model';
import { UserUtil } from 'src/app/utils/user.utils';

@Component({
  selector: 'app-produto-editor',
  templateUrl: './produto-editor.component.html',
  styleUrls: ['./produto-editor.component.css']
})
export class ProdutoEditorComponent implements OnInit {
  public form: FormGroup;
  public categories: Category[];
  public userIsManager: boolean;
  @Input() product: Product;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private categoryService: CategoryService
  ) {
    this.form = this.fb.group({
      id: ['', Validators.required],
      title: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
      amount: ['', Validators.required],
      category: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.userIsManager = UserUtil.userIsManager();
    this.getCategories();
  }

  ngOnChanges() {
    this.form.controls['id'].setValue(this.product.id);
    this.form.controls['title'].setValue(this.product.title);
    this.form.controls['price'].setValue(this.product.price);
    this.form.controls['description'].setValue(this.product.description);
    this.form.controls['amount'].setValue(this.product.amount);
    this.form.controls['category'].setValue(this.product.category);
  }

  save() {
    let isNew: boolean = (!this.form.controls['id'].value)

    this.productService.save(isNew, this.form.value)
      .subscribe(
        (res: Result) => {
          alert(res.message);
        },
        (err) => { }
      );
  }

  delete() {
    this.productService.delete(this.form.value)
      .subscribe(
        (res: Result) => {
          alert(res.message);
        },
        (err) => {

        }
      );
  }

  getCategories() {
    this.categoryService.getCategories()
      .subscribe(
        (res: Result) => { this.categories = res.data },
        (err) => { alert("Falha ao carregar categoria"); },
      )
  }
}
