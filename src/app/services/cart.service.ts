import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'

export interface Product {
  id: number;
  name: string;
  score: number;
  yellowCard: number;
  redCard: number;
  offSide: number;
  imageurl: string;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  data: Product[]=[{id: 0, name: "Chiefs", redCard:0, offSide:0, score:0,yellowCard:0,imageurl:"https://i.pinimg.com/564x/b7/8a/49/b78a4967a507713a36b049e40ee742b3.jpg"},
  {id: 1, name: "Pirates", score:0,yellowCard:0, redCard:0,offSide:0, imageurl: "https://i.pinimg.com/564x/33/37/90/333790bdbf342ec6a7185f384aa74928.jpg"}];

  private cart=[];
  private cartItemCount = new BehaviorSubject(0);
    constructor() { }
    getProducts() {
      return this.data;
    }
   
    getCart() {
      return this.cart;
    }
   
    getCartItemCount() {
      return this.cartItemCount;
    }
    addProduct(product) {
      let added = false;
      for (let p of this.cart) {
        if (p.id === product.id) {
          p.score += 1;
          added = true;
          break;
        }
      }
      if (!added) {
        product.score = 1;
        this.cart.push(product);
      }
      this.cartItemCount.next(this.cartItemCount.value + 1);
    }
   
    decreaseProduct(product) {
      for (let [index, p] of this.cart.entries()) {
        if (p.id === product.id) {
          p.score -= 1;
          if (p.score == 0) {
            this.cart.splice(index, 1);
          }
        }
      }
      this.cartItemCount.next(this.cartItemCount.value - 1);
    }
   
    removeProduct(product) {
      for (let [index, p] of this.cart.entries()) {
        if (p.id === product.id) {
          this.cartItemCount.next(this.cartItemCount.value - p.score);
          this.cart.splice(index, 1);
        }
      }
    }
}
