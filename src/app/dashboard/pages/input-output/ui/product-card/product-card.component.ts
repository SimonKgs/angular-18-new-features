import { Component, effect, EventEmitter, input, Input, output, Output } from '@angular/core';
import { Product } from '@interfaces/product.interface';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  // old way to define inputs
  // @Input({
  //   required: true,
  // }) product!: Product;
  //new way
  public product = input.required<Product>()

  // old output
  // @Output()
  // public onIncrementQuantity = new EventEmitter<number>();
  // new output
  public onIncrementQuantity = output<number>();

  public incrementQuantity(): void {
    this.onIncrementQuantity.emit(this.product().quantity + 1)
  }

  public logginEffect = effect( () => {
    console.log(this.product().name);
  })

}
