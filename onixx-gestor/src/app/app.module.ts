import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
registerLocaleData(ptBr);

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { Firebase } from '@ionic-native/firebase/ngx';

import { HttpClientModule } from '@angular/common/http';
import { Storage, IonicStorageModule } from '@ionic/storage';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { DocumentViewer } from '@ionic-native/document-viewer/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';

export function jwtOptionsfactory(storage) {
  return {
    tokenGetter: () => {
      return storage.get('access_token');
    },
    whitelistedDomains: ['localhost:1982', 'wakenfun.com.br']
  }
}

const config = {
  apiKey: "AIzaSyBiTJattmBloTSc4y6JBXpht5goXE4Vsxw",
  authDomain: "onixx-gestor-6f0b9.firebaseapp.com",
  databaseURL: "https://onixx-gestor-6f0b9.firebaseio.com",
  projectId: "onixx-gestor-6f0b9",
  storageBucket: "onixx-gestor-6f0b9.appspot.com",
  messagingSenderId: "426188715170"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsfactory,
        deps: [Storage]
      }
    }),
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Firebase,
    File,
    FileTransfer,
    DocumentViewer,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
