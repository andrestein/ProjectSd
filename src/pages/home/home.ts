import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database/database';
import { ToastController } from 'ionic-angular';
import { Data } from '../../services/Data';
import { Observable} from 'rxjs';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class Inicio {
  dates = { air: "", earth: "", light: "", tem: "" };
  state = null;
  systemaL = null;
  systemaR = null;
  systemaA = null;
  systemaM = null;

  icons: Array<{ name: String, icon: String }>;
  dataIcons: Array<{ name: String, icon: String }>;
  notes:Observable<any>;
  constructor(public dataService: Data, public navCtrl: NavController,
    public afdb: AngularFireDatabase, private toastCtrl: ToastController) {
    var self = this;
    this.notes = afdb.list('/plantapp/state').valueChanges();
    dataService.getToogles()
      .subscribe(system => {
        self.systemaM = system[0];
        if(self.systemaM){
          this.presentToast('Se detecto movimiento en la zona');
        }
        self.systemaA = system[1];
        self.systemaL = system[2];
        self.systemaR = system[3];
      });
    dataService.getState()
      .subscribe(system => {
        self.state = system[0];
      });    
    this.icons = [{ name: 'Sistema Lumínico', icon: 'bulb' },
    { name: 'Sistema de Riego', icon: 'color-fill' },
    { name: 'Sistema de Acceso', icon: 'key' },
    { name: 'Estado Automatico', icon:'refresh'}];
    this.dataIcons=[{name:"Humedad Aire",icon:'leaf'}, 
    {name:"Humedad Tierra",icon:'water'},
    {name:"Luz",icon:'sunny'},
    {name:"Temperatura",icon:'thermometer'}];
  }

  public crearData() {
    if (this.validarCampoNulo()) {
      if (this.validarNumero()) {
        this.afdb.database.ref('plantapp').child('state').set(this.dates);
        this.clearData();
        this.presentToast('los datos se cargaron con exito');
      } else {
        this.presentToast('Los datos deben ser de tipo numerico');
      }
    } else {
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

  private validarCampoNulo(): boolean {
    if (this.dates.air != "" && this.dates.earth != "" && this.dates.light != "" && this.dates.tem != "") {
      return true;
    } else {
      return false;
    }
  }

  private validarNumero(): boolean {
    if (Number.isNaN(+this.dates.air) || Number.isNaN(+this.dates.earth)
      || Number.isNaN(+this.dates.light) || Number.isNaN(+this.dates.tem)) {
      return false;
    } else {
      return true;
    }
  }

  private clearData() {
    this.dates.air = "";
    this.dates.earth = "";
    this.dates.light = "";
    this.dates.tem = "";
  }

  public getState() {
    this.afdb.database.ref('plantapp/autostate/state').set(this.state);
  }

  public getSl() {
    this.afdb.database.ref('plantapp/system/sl').set(this.systemaL);
  }

  public getSr() {
    this.afdb.database.ref('plantapp/system/sr').set(this.systemaR);
  }

  public getSa() {
    this.afdb.database.ref('plantapp/system/sa').set(this.systemaA);
  }
}

