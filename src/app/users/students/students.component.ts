import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../model/user.model';
import { UserService } from '../../service/user.service';
import { UserRole } from '../../emums/user-role.enum'; 

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  private users: User[] = []; 
  constructor(private _user: UserService) { }

  onChanges(){
  }
  ngOnInit() {
    this._user.getByRole(UserRole.STUDENT).subscribe(
      users => {
        this.users = users; 
      }
    ); 
  }

  onUpdate(){
    this.ngOnInit(); 
  }

}
