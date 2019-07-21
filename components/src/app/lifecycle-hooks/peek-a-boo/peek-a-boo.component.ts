import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';
import {LoggerService} from '../../logger.service';

let nextId = 1;

export class PeedABoo implements OnInit {

  constructor(private logger: LoggerService) {

  }

  ngOnInit(): void {
    this.logIt('OnInit');
  }

  logIt(msg: string) {
    this.logger.log(`#${nextId++} ${msg}`);
  }
}

@Component({
  selector: 'app-peek-a-boo',
  templateUrl: './peek-a-boo.component.html',
  styles: []
})
export class PeekABooComponent extends PeedABoo
  implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() name: string;

  private verb = 'initialized';

  constructor(logger: LoggerService) {
    super(logger);
    const is = this.name ? 'is' : 'is not';
    this.logIt(`name ${is} known at construction`);
  }

  ngOnChanges(changes: SimpleChanges): void {
    const changesMsgs: string[] = [];
    for (const propName in changes) {
      if (propName === 'name') {
        const currentName = changes.name.currentValue;
        changesMsgs.push(`name ${this.verb} to "${currentName}"`);
      } else {
        changesMsgs.push(propName + ' ' + this.verb);
      }
    }
    this.logIt(`OnChanges: ${changesMsgs.join('; ')}`);
    this.verb = 'changed'; // next time it will be a change
  }

  // Beware! Called frequently!
  // Called in every change detection cycle anywhere on the page
  ngDoCheck() {
    this.logIt(`DoCheck`);
  }

  ngAfterContentInit() {
    this.logIt(`AfterContentInit`);
  }

  // Beware! Called frequently!
  // Called in every change detection cycle anywhere on the page
  ngAfterContentChecked() {
    this.logIt(`AfterContentChecked`);
  }

  ngAfterViewInit() {
    this.logIt(`AfterViewInit`);
  }

  // Beware! Called frequently!
  // Called in every change detection cycle anywhere on the page
  ngAfterViewChecked() {
    this.logIt(`AfterViewChecked`);
  }

  ngOnDestroy() {
    this.logIt(`OnDestroy`);
  }

}
