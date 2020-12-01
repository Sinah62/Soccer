import { Component, ViewChild, ElementRef } from '@angular/core';
import { CartService } from 'src/app/services/cart.service'
import { ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { CartModelPage } from 'src/app/pages/cart-model/cart-model.page';
//import { AuthService} from 'src/app/services/auth.service'
//import { RegisterPage } from 'src/app/pages/register/register.page'


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

 cart = [];
  products = [];
  cartItemCount: BehaviorSubject<number>;
  register =[];
 
  @ViewChild('cart', {static: false, read: ElementRef})fab: ElementRef;
 
  constructor(private cartService: CartService, private modalCtrl: ModalController) {}
 
  ngOnInit() {
    this.products = this.cartService.getProducts();
    this.cart = this.cartService.getCart();
    this.cartItemCount = this.cartService.getCartItemCount();
   //this.register=  this.authService.getAuth();
  }
 
  addToCart(product) {
    this.cartService.addProduct(product);
    this.animateCSS('tada');
  }
 
  async openCart() {
    this.animateCSS('bounceOutLeft', true);
 
    let modal = await this.modalCtrl.create({
      component: CartModelPage,
      cssClass: 'cart-modal'
    });
    modal.onWillDismiss().then(() => {
      this.fab.nativeElement.classList.remove('animated', 'bounceOutLeft')
      this.animateCSS('bounceInLeft');
    });
    modal.present();
  }
  animateCSS(animationName, keepAnimated = false) {
    const node = this.fab.nativeElement;
    node.classList.add('animated', animationName)
    
    function handleAnimationEnd() {
      if (!keepAnimated) {
        node.classList.remove('animated', animationName);
      }
      node.removeEventListener('animationend', handleAnimationEnd)
    }
    node.addEventListener('animationend', handleAnimationEnd)
  }
}

  //  register(form) {
  // //     this.authService.register(form.value).subscribe((res) => {
  //        this.router.navigateByUrl('home');
  // //     });
  //    }
