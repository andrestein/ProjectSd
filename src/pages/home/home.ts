import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AngularFireDatabase} from 'angularfire2/database/database';
import { ToastController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class Inicio {
  dates ={air:"",earth:"",light:"",tem:""};
  icons:Array<{name:String,icon:String}>;
  system={Sl:false, Sr:false, Sa:false};
  constructor(public navCtrl: NavController, public afdb: AngularFireDatabase,private toastCtrl: ToastController) {
    this.icons=[{name:'Sistema Lumínico', icon:'bulb'},
                {name:'Sistema de Riego', icon:'color-fill'},
                {name:'Sistema de Acceso', icon:'key'}];

  }
  public crearData(){    
    if(this.validarCampoNulo()){
      console.log(Number.isNaN(+this.dates.air));
      console.log(+this.dates.air);
      if(this.validarNumero()){
        this.afdb.database.ref('plantapp').child('state').set(this.dates);
        this.clearData();
        this.presentToast('los datos se cargaron con exito');
      }else{
        this.presentToast('Los datos deben ser de tipo numerico');  
      }
    }else{
      this.presentToast('No deben existir campos vacios');
    }
  }

  private presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'middle'
    });  
    toast.present();
  }

  private validarCampoNulo():boolean{
    if(this.dates.air !="" && this.dates.earth !="" && this.dates.light !="" && this.dates.tem !=""){
      return true;
    }else{
      return false;
    }
  }

  private validarNumero():boolean{
    if(Number.isNaN(+this.dates.air) || Number.isNaN(+this.dates.earth)
    || Number.isNaN(+this.dates.light) || Number.isNaN(+this.dates.tem)){
      return false;
    }else{
      return true;
    }
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

