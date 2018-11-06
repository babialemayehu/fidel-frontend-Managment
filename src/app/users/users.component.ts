import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../model/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  private $users: User[] = [];
  constructor(private _user: UserService) { }

  ngOnInit() {
  }

  selectedTab(e){
  }

}
