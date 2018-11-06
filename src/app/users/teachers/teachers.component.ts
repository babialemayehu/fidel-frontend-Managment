import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../model/user.model';
import { UserService } from '../../service/user.service';
import { UserRole } from '../../emums/user-role.enum';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent implements OnInit {

  private users: User[] = []; 
  constructor(private _user: UserService) { }

  onChanges(){
  }
  ngOnInit() {
    this._user.getByRole(UserRole.TEACHER).subscribe(
      users => {
        this.users = users; 
      }
    ); 
  }

  onUpdate(){
    this.ngOnInit(); 
  }


}
