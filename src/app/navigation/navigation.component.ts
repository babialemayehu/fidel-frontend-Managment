import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatDialog } from '@angular/material';
import { UserRegComponent } from '../user-reg/user-reg.component';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {

  // isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  //   .pipe(
  //     map(result => result.matches)
  //   );
  isHeadset$ = false; 

  constructor(private breakpointObserver: BreakpointObserver, 
    private _modal: MatDialog) {}

  OnAction($action){
    switch($action){
      case 1: 
        this.openUserReg();
      break; 
    }
  }

  openUserReg(){
    this._modal.open(UserRegComponent, {
      width: '600px', 
      disableClose: true, 
      data: {
        
      }
    })
  }

}
