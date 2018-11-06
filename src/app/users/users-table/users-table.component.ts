import { Component, OnInit, ViewChild, Input} from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { UsersTableDataSource } from './users-table-datasource';
import { User } from '../../model/user.model';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss'],
})
export class UsersTableComponent implements OnInit {
  @Input() data: User[] = []; 
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: UsersTableDataSource;

  displayedColumns = ['num','regId', 'name', 'phone', 'email', ];

  ngOnChanges(){
     console.log(this.data);
    this.dataSource = new UsersTableDataSource(this.paginator, this.sort, this.data);
  }
  ngOnInit() {
    this.dataSource = new UsersTableDataSource(this.paginator, this.sort, this.data);
  }
}
