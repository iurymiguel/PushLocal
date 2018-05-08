import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { Push, PushObject, PushOptions } from '@ionic-native/push';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private push: Push) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.initPushNotification();
    });
  }

  initPushNotification() {
    const options: PushOptions = {
      android: {
        senderID: '991987094804',
      },
      ios: {
        alert: 'true',
        badge: true,
        sound: 'false'
      },
      windows: {}
    }

    const pushObject: PushObject = this.push.init(options);

    pushObject.on('registration').subscribe((data: any) => {
      console.log('device token '+data.registrationId);
      console.log('registrationType '+data.registrationType);
    });

    pushObject.on('notification').subscribe((data: any) => {
      console.log('titleNotification '+data.title);
      console.log('AdditionalData '+data.additionalData.customData);


      if(data.additionalData.foreground){
      
      }


    });

   

  }

}

