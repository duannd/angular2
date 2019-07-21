import {Directive, OnDestroy, OnInit} from '@angular/core';
import {LoggerService} from '../logger.service';


let nextId = 1;

// Spy on any element to which it is applied.
// Usage: <div appSpy>...</div>
@Directive({
  selector: '[appSpy]'
})
export class SpyDirective implements OnInit, OnDestroy {

  constructor(private logger: LoggerService) {
  }

  ngOnDestroy(): void {
    this.logger.log('');
  }

  ngOnInit(): void {
  }

  private logIt(msg: string) {
    this.logger.log(`Spy #${nextId++} ${msg}`);
  }

}
