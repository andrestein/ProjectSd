import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AngularFireDatabase} from 'angularfire2/database/database';
import { Observable} from 'rxjs';

@Component({
  selector: 'page-view',
  templateUrl: 'view.html'
})
export class View {
  notes:Observable<any>;
  icons:Array<{Name:String,icon:String}>;
  constructor(public navCtrl: NavController,public afdb: AngularFireDatabase) {
     this.notes = afdb.list('/plantapp/state').valueChanges();
     this.icons=[{Name:"Humedad Aire",icon:'leaf'}, 
     			{Name:"Humedad Tierra",icon:'water'},
     			{Name:"Luz",icon:'sunny'},
     			{Name:"Temperatura",icon:'thermometer'}];
  }
}  