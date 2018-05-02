import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Data } from '../../services/Data';
import {AngularFireDatabase} from 'angularfire2/database/database'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  notes = [];
  dates ={air:"",earth:"",light:"",tem:""};
  constructor(public navCtrl: NavController, public data: Data, public afbs: AngularFireDatabase) {
    this.notes = data.getNotes();
  }
  public crearData(){
    this.afbs.database.ref('plantapp').child('state').set(this.dates);
    this.clearData();
  }
  private clearData(){
    this.dates.air  = "";
    this.dates.earth = "";
    this.dates.light = "";
    this.dates.tem = "";
  }
}
