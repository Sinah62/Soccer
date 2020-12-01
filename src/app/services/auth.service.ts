import { Injectable } from '@angular/core';
import { ModalController } from "@ionic/angular";
import { RegisterPage } from 'src/app/pages/register/register.page'

export interface Details {
  id?: any;
  name?: any;
  email?: any;
  pass?: any;
  passre?: any;
 
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(public modalController: ModalController, public data: any) {}

  /**
   * CLOSE THE MODAL ON CLICK
   */
  async closeDetailModal() {
    await this.modalController.dismiss();
  }
  getUserDetail() {
    return this.data;
  }
  async createDetails(data: Details) {
  

    // const user = await this.afAuth.currentUser;
    // return this.db.collection("detail").add({
    //   ...data,
      // automatically sets the UID property of the workspace here
      //uid: user.uid,
   // });
  }
}
