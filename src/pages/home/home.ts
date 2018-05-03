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
  constructor(public navCtrl: NavController, public data: Data, public afdb: AngularFireDatabase) {
    this.notes = data.getNotes();
  }
  public crearData(){
    this.afdb.database.ref('plantapp').child('state').set(this.dates);
    this.clearData();
  }
  private clearData(){
    this.dates.air  = "";
    this.dates.earth = "";
    this.dates.light = "";
    this.dates.tem = "";
  }
}

@Component({
  selector: 'page-view',
  templateUrl: 'view.html'
})
export class View {
  constructor(public db: AngularFireDatabase) {}

  public getDatos(){
    var items = this.db.list('plantaap/').valueChanges();
    document.getElementById("ht").innerHTML= String(items[0]);
  }
}

