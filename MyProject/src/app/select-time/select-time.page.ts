import { Component, OnInit } from '@angular/core';
import { TabletimeService, TableTime } from '../tabletime.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-select-time',
  templateUrl: './select-time.page.html',
  styleUrls: ['./select-time.page.scss'],
})

export class SelectTimePage implements OnInit {
  tabletimes : TableTime[];
  start : String = new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000).toISOString();
  end : String = new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000).toISOString();
  subjuct : String = 'ระบุวิชาที่สอน';
  fname : String = 'ชื่ออาจารย์ผู้สอน';
  lname : String = 'สกุลอาจารย์ผู้สอน';
  room : number = this.route.snapshot.params['id']; ;
  
  dateStart : string;
  dateEnd : string;

  addTable: TableTime ={
    fname : 'ชื่ออาจารย์ผู้สอน',
    lname : 'สกุลอาจารย์ผู้สอน',
    room :  this.route.snapshot.params['id'] ,
    start : new Date().getDate(),
    end : new Date().getDate(),
    subjuct : 'ระบุวิชาที่สอน',
    idadmin : null,
  };

  constructor(public navCtrl: NavController,public authService: AuthService,private tabletimeservice : TabletimeService,private route:ActivatedRoute,private nav:NavController,private storage: Storage) { 
    storage.get('loginstatus').then((status) => {
      if(status){
        console.log('status', status);
      }else{
        this.navCtrl.navigateRoot('/login');
      }
      
    });

    storage.get('uid').then((uid) => {
      this.addTable.idadmin = uid;
    });
    
  }

  ngOnInit() {
    this.tabletimeservice.getMedicine().subscribe(
      res => {
        this.tabletimes = res;
      }
    );
  }

  saveMedicine(){
    this.dateStart = this.start.toString();
    this.dateEnd = this.end.toString();
    this.addTable.start = Math.round((new Date(this.dateStart).getTime())/1000);
    this.addTable.end = Math.round((new Date(this.dateEnd).getTime())/1000);
    this.tabletimeservice.addMedicine(this.addTable);
  }

  deleteMedicine(item){
    this.tabletimeservice.deleteMedicine(item.id);
  }

}
