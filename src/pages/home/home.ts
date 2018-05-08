import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { Push, PushObject, PushOptions } from '@ionic-native/push';
import { LocalNotifications } from '@ionic-native/local-notifications';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [LocalNotifications]
})
export class HomePage {

  constructor(public navCtrl: NavController, private localNotifications: LocalNotifications) {

  }

  notify(){
    this.localNotifications.schedule({
      id: 1,
      title: 'Local ILocalNotification Example',
      text: 'Single ILocalNotification',
      priority: 2,
      data: { secret: 'key' }
    });

    this.localNotifications.on('click').subscribe((notification) => {
        console.log('clicked');
        console.log(notification);
        
    });
  
  }

}
