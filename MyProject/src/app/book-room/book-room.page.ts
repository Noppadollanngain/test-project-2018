import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from '../auth.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-book-room',
  templateUrl: './book-room.page.html',
  styleUrls: ['./book-room.page.scss'],
})
export class BookRoomPage implements OnInit {

  constructor(public navCtrl: NavController,public authService: AuthService,private storage: Storage) { 
    storage.get('loginstatus').then((status) => {
      if(status){
        console.log('status', status);
      }else{
        this.navCtrl.navigateRoot('/login');
      }
      
    });
  }

  ngOnInit() {
  }

  selecttime(id){
    this.navCtrl.navigateRoot('/select-time/'+id);
  }

}
