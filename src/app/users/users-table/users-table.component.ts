import { Component, OnInit, ViewChild, Input, Output, EventEmitter} from '@angular/core';
import { MatPaginator, MatSort, MatDialog } from '@angular/material';
import { UsersTableDataSource } from './users-table-datasource';
import { User } from '../../model/user.model';
import { ContextMenuComponent } from '../../context-menu/context-menu.component'; 
import { UserRegComponent } from '../../user-reg/user-reg.component';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss'],
})
export class UsersTableComponent implements OnInit {

  constructor(private _modal: MatDialog, private _user: UserService){}

  @Input() data: User[] = []; 
  @Output() update: EventEmitter<any> = new   EventEmitter(); 

  private contextMenu = ContextMenuComponent;

  menuItems = [
    {icon: 'edit', text: 'Edit'},
    {icon: 'delete', text: 'Remove user'},
    {icon: 'refresh', text: 'Reset password'},
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: UsersTableDataSource;

  displayedColumns = ['num','regId', 'name', 'phone', 'email', ];

  ngOnChanges(){
    this.dataSource = new UsersTableDataSource(this.paginator, this.sort, this.data);
  }
  ngOnInit() {
    this.dataSource = new UsersTableDataSource(this.paginator, this.sort, this.data);
  }

  onContextMenu(e){
    switch(e.index){
      case 0:
        this.updateUser(e.data);  
      break; 
      case 1: 
        this.delete(e.data.id); 
      break; 
      case 2: 
        this.reset(e.data.id); 
      break; 
    }
  }
  updateUser(data: User){
    let dialogRef = this._modal.open(UserRegComponent, {
      width: '600px',
      disableClose: true,  
      data: {
        user: data
      }
    }); 

    dialogRef.afterClosed().subscribe(
      () => {
        this.update.emit(); 
      }
    )
  }

  delete(id: number){
    this._user.delete(id).subscribe(
      value => {}
    )
  }

  reset(id: number){
    this._user.reset(id).subscribe(
      (value) => {}
    )
  }
}
