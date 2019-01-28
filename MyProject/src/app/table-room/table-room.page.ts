import { Component, OnInit } from '@angular/core';
import { TabletimeService, TableTime } from '../tabletime.service';
@Component({
  selector: 'app-table-room',
  templateUrl: './table-room.page.html',
  styleUrls: ['./table-room.page.scss'],
})
export class TableRoomPage implements OnInit {
  tabletimes : TableTime[];
  constructor(private tabletimeservice : TabletimeService) { }

  ngOnInit() {
    this.tabletimeservice.getMedicine().subscribe(
      res => {
        this.tabletimes = res;
      }
    );
  }

}
