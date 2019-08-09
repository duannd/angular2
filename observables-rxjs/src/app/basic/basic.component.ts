import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Observable, of, Subscription} from 'rxjs';
import {delay} from 'rxjs/operators';

const ESC_KEY = 27;
// Define myObserver
const myObserver = {
  next: (value) => {
    console.log(`My Observer see next function :: value: ${value}`);
  },
  error: (error) => {
    console.error(`My Observer see error handler: ${error}`);
  },
  complete: () => {
    console.log('My Observer see complete handler');
  }
};
// Define/Create simple observable that emits three values
const myObservable = of(1, 2, 3).pipe(delay(400));

// Create observable with constructor
function sequenceSubscribe(observer) {
  // synchronously deliver 1, 2, and 3, then complete
  observer.next(1);
  observer.next(2);
  observer.next(4);
  observer.complete();
  // unsubscribe function doesn't need to do anything in this
  // because values are delivered synchronously
  const subscription = new Subscription(() => {
    console.log('Sequence Subscription unsubscribe');
  });
  // return a subscription
  console.log('Sequence Subscribe initial success then return a subscription');
  return subscription;
}

// Create a new Sequence Observable that will deliver the above sequence
const sequence = new Observable(sequenceSubscribe).pipe(delay(1000));

// Create a Observable from Event.
function fromEvent(target, eventName) {
  return new Observable((observer) => {
    const handler = (e) => observer.next(e);
    // Add the event handler to the target
    target.addEventListener(eventName, handler);
    return () => {
      // Detach the event handler from the target
      target.removeEventListener(eventName, handler);
    };
  });
}

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styles: []
})
export class BasicComponent implements OnInit, AfterViewInit {

  mySubscription: Subscription;
  sequenceSubscription: Subscription;
  fromEventSubscription: Subscription;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    const nameInput = document.getElementById('name') as HTMLInputElement;
    // register a subscribe fromEvent => OK, it is running.
    this.fromEventSubscription = fromEvent(nameInput, 'keyup').subscribe(
      (e: KeyboardEvent) => {
        if (e.keyCode === ESC_KEY) {
          nameInput.value = '';
        }
      }
    );
  }

  subscribeMyObservable() {
    // Execute with the observer object
    this.mySubscription = myObservable.subscribe(myObserver);
  }

  unsubscribeMyObservable() {
    if (this.mySubscription) {
      console.log('Unsubscribe myObservable');
      this.mySubscription.unsubscribe();
      this.mySubscription = undefined;
    }
  }

  subscribeSequence() {
    this.sequenceSubscription = sequence.subscribe(
      value => console.log(`Next value: ${value}`),
      error => console.error(`Error: ${error}`),
      () => console.log('The End subscribe Sequence')
    );
  }

  unsubscribeSequence() {
    if (this.sequenceSubscription) {
      console.log('Unsubscribe SequenceObservable');
      this.sequenceSubscription.unsubscribe();
      this.sequenceSubscription = undefined;
    }
  }

}
