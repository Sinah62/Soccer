import { Component, OnInit } from '@angular/core';
import { Router } from  "@angular/router";
import { AuthService, Details } from 'src/app/services/auth.service';
import { Subscription } from 'rxjs';
import { ModalController } from '@ionic/angular'

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
 
  constructor() { }

  ngOnInit() {
     
  }
 
}
  
 

