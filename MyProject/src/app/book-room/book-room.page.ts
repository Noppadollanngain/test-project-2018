import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-book-room',
  templateUrl: './book-room.page.html',
  styleUrls: ['./book-room.page.scss'],
})
export class BookRoomPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  selecttime(id){
    this.navCtrl.navigateRoot('/select-time');
  }

}
