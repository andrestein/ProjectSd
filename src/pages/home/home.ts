import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AngularFireDatabase} from 'angularfire2/database/database'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class Inicio {
  dates ={air:"",earth:"",light:"",tem:""};
  icons:Array<{name:String,icon:String}>;
  system={Sl:false, Sr:false, Sa:false};
  constructor(public navCtrl: NavController, public afdb: AngularFireDatabase) {
    this.icons=[{name:'Sistema Lumínico', icon:'bulb'},
                {name:'Sistema de Riego', icon:'color-fill'},
                {name:'Sistema de Acceso', icon:'key'}];

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

  public getSl(){
    this.afdb.database.ref('plantapp').child('system').child('sl').set(this.system.Sl);
  }

  public getSr(){
    this.afdb.database.ref('plantapp').child('system').child('sr').set(this.system.Sr);
  }

  public getSa(){
    this.afdb.database.ref('plantapp').child('system').child('sa').set(this.system.Sa);
  }
}

