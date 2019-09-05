import {Component, OnInit} from '@angular/core';
import {Crisis} from '../crisis';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {DialogService} from '../../dialog.service';
import {CanComponentDeactivate} from '../../can-deactivate.guard';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styles: [
      `input {
          width: 20em
      }`
  ]
})
export class CrisisDetailComponent implements OnInit, CanComponentDeactivate {

  crisis: Crisis;
  editName: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public dialogService: DialogService
  ) {
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe((data: { crisis: Crisis }) => {
      this.editName = data.crisis.name;
      this.crisis = data.crisis;
    });
  }

  cancel() {
    this.gotoCrises();
  }

  save() {
    this.crisis.name = this.editName;
    this.gotoCrises();
  }

  canDeactivate(): Observable<boolean> | boolean {
    // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
    if (!this.crisis || this.crisis.name === this.editName) {
      return true;
    }
    // Otherwise ask the user with the dialog service and return its
    // observable which resolves to true or false when the user decides
    return this.dialogService.confirm('Discard changes, OK?');
  }

  gotoCrises() {
    const crisisId = this.crisis ? this.crisis.id : null;
    // Pass along the crisis id if available
    // so that the CrisisListComponent can select that crisis.
    // Add a totally useless `foo` parameter for kicks.
    // Relative navigation back to the crises
    this.router.navigate(['../', {id: crisisId, foo: 'foo'}], {relativeTo: this.activatedRoute});
  }

}
