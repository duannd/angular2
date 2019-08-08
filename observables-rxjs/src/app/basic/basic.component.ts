import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

// Create an Observable that will start listening to geolocation updates when a consumer subscribes.
console.log('Create an Observable that will start listening to geolocation updates when a consumer subscribes.');
const locations = new Observable<any>((observe) => {
  // Get the next and error callbacks. These will be passed in when the consumer subscribes.
  console.log('Get the next and error callbacks. These will be passed in when the consumer subscribes.');
  const {next, error} = observe;
  let watchId;
  // Simple geolocation API check provides values to publish
  console.log('Simple geolocation API check provides values to publish');
  if ('geolocation' in navigator) {
    watchId = navigator.geolocation.watchPosition(next, error);
  } else {
    error('Geolocation not available');
  }
  // When the consumer unsubscribe, clean up data ready for next subscription.
  console.log('When the consumer unsubscribe, clean up data ready for next subscription.');
  return {
    unsubscribe(): void {
      console.log('locations unsubscribe...');
      navigator.geolocation.clearWatch(watchId);
    }
  };
});

// Call subscribe() to start listening for updates.
const locationsSubscription = locations.subscribe({
  next(position) {
    console.log('Current Position: ', position);
  },
  error(msg) {
    console.log('Error Getting Location: ', msg);
  }
});

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styles: []
})
export class BasicComponent implements OnInit {

  // locationsSubscription: Subscription;

  constructor() {
  }

  ngOnInit() {
    console.log('BasicComponent onInit');
    // this.locationsSubscription = locations.subscribe({
    //   next(position) {
    //     console.log(`Current position: ${position}`);
    //   },
    //   error(msg) {
    //     console.log('Error Getting Location: ', msg);
    //   }
    // });
  }

  unsubscribe() {
    locationsSubscription.unsubscribe();
  }

}
