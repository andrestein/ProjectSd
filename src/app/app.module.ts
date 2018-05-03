import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { Inicio } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { View} from '../pages/view/view';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Data } from '../services/Data';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyA0jGPElcztD_heT3lQt5gT_C5Xr6_51-c",
  authDomain: "projectsd-23012.firebaseapp.com",
  databaseURL: "https://projectsd-23012.firebaseio.com",
  projectId: "projectsd-23012",
  storageBucket: "projectsd-23012.appspot.com",
  messagingSenderId: "179249659830"
};

@NgModule({
  declarations: [
    MyApp,
    Inicio,
    ListPage, 
    View
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Inicio,
    ListPage,
    View
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Data
  ]
})
export class AppModule {}
