import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController} from '@ionic/angular';
import { Product, CartService } from 'src/app/services/cart.service'


@Component({
  selector: 'app-cart-model',
  templateUrl: './cart-model.page.html',
  styleUrls: ['./cart-model.page.scss'],
})
export class CartModelPage implements OnInit {

  cart: Product[] = [];

 
  constructor(private cartService: CartService, private modalCtrl: ModalController, private alertCtrl: AlertController) { }
 
  ngOnInit() {
    this.cart = this.cartService.getCart();
  }
 
  decreaseCartItem(product) {
    this.cartService.decreaseProduct(product);
  }
 
  increaseCartItem(product) {
    this.cartService.addProduct(product);
  }
 
  removeCartItem(product) {
    this.cartService.removeProduct(product);
  }
 
  getTotal() {
    return this.cart.reduce((i, j) => i + j.score * j.yellowCard, 0);
  }
 
  close() {
    this.modalCtrl.dismiss();
  }
 
  async checkout() {
    // Perfom PayPal or Stripe checkout process
 
    let alert = await this.alertCtrl.create({
      header: 'Great game!',
      message: 'Your team won',
      buttons: ['OK']
    });
    alert.present().then(() => {
      this.modalCtrl.dismiss();
    });
  }


}
