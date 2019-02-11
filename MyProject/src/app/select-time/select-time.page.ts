import { Component, OnInit } from '@angular/core';
import { TabletimeService, TableTime } from '../tabletime.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-select-time',
  templateUrl: './select-time.page.html',
  styleUrls: ['./select-time.page.scss'],
})

export class SelectTimePage implements OnInit {
  tabletimes : TableTime[];
  start : String = new Date().toISOString();
  end : String = new Date().toISOString();
  subjuct : String = 'ระบุวิชาที่สอน';
  fname : String = 'ชื่ออาจารย์ผู้สอน';
  lname : String = 'สกุลอาจารย์ผู้สอน';
  room : number = 1 ;

  addTable: TableTime ={
    fname : 'ชื่ออาจารย์ผู้สอน',
    lname : 'สกุลอาจารย์ผู้สอน',
    room :  1 ,
    start : new Date().getDate(),
    end : new Date().getDate(),
    subjuct : 'ระบุวิชาที่สอน',
  };

  constructor(private tabletimeservice : TabletimeService,private nav:NavController ) { }

  ngOnInit() {
    this.tabletimeservice.getMedicine().subscribe(
      res => {
        this.tabletimes = res;
      }
    );
  }

  saveMedicine(){
    alert(this.addTable.start);
    this.tabletimeservice.addMedicine(this.addTable);
  }

  deleteMedicine(item){
    this.tabletimeservice.deleteMedicine(item.id);
  }

}
