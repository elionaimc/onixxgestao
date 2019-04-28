import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-inside',
  templateUrl: './inside.page.html',
  styleUrls: ['./inside.page.scss'],
})
export class InsidePage implements OnInit {

  data = '';

  constructor(
    private authService: AuthService,
    private storage: Storage,
    private toastController: ToastController
  ) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
  }

  clearToken() {
    this.storage.remove('access_token');

    let toast = this.toastController.create({
      message: 'Token expirou por isso foi removido',
      duration: 3000
    });
    toast.then(toast => toast.present());
    this.logout();
  }

}
