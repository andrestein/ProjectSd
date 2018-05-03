import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database/database'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class Inicio {
  dates ={air:"",earth:"",light:"",tem:""};
  constructor(public navCtrl: NavController, public afdb: AngularFireDatabase) {}
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
/*
@Component({
  selector: 'page-view',
  templateUrl: 'view.html'
})
export class View {
  notes:AngularFireList<any>;
  variables:AngularFireList<any>;
  constructor(public afdb: AngularFireDatabase) {
     this.notes = afdb.list('/plantapp/state').valueChanges();
     this.variables = afdb.list('/plantapp/variables').valueChanges();
  }
}*/

