import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { TabletimeService } from '../tabletime.service';
import { Storage } from '@ionic/storage';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})


export class LoginPage implements OnInit {

  constructor(private tabletimeservice : TabletimeService,public navCtrl: NavController,public authService: AuthService,private storage: Storage) { 
    storage.get('loginstatus').then((status) => {
      console.log('status', status);
    });
    storage.get('uid').then((uid) => {
      console.log('uid', uid);
    });
  }

  ngOnInit() {
  }

  goToBookRoom(){
    this.navCtrl.navigateRoot('/book-room');
  }

  email: string;
  password: string;

  signup() {
    this.authService.signup(this.email, this.password);
    this.email = this.password = '';
  }

  login() {
    this.authService.login(this.email, this.password);
    this.email = this.password = '';    
    this.storage.set('loginstatus', true);
  }

  logout() {
    this.authService.logout();
    this.storage.set('loginstatus', false);
  }
}
