import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface TableTime {
  fname: string;
  lname: string;
  room: number;
  start: number;
  end: number;
  subjuct: string;
}

@Injectable({
  providedIn: 'root'
})
export class TabletimeService {
  private tabletimeCollection : AngularFirestoreCollection<TableTime>;
  private tabletimes : Observable<TableTime[]>;

  constructor(db : AngularFirestore) { 
    this.tabletimeCollection = db.collection<TableTime>('tabletime');
      this.tabletimes = this.tabletimeCollection.snapshotChanges().pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
          });
        })
      );
  }

  getMedicine(){
    return this.tabletimes;
  }

  addMedicine(addTable:TableTime){
    return this.tabletimeCollection.add(addTable);
  }

  deleteMedicine(id){
    return this.tabletimeCollection.doc(id).delete();
  }
  
}
