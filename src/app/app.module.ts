import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule,
   MatButtonModule,
   MatSidenavModule,
   MatIconModule,
   MatListModule, 
   MatCheckboxModule,
   MatGridListModule,
   MatCardModule,
   MatMenuModule,
   MatTableModule,
   MatPaginatorModule,
   MatSortModule, 
   MatDialogModule,  
   MatSelectModule, 
   MatAutocompleteModule, 
   MatDatepickerModule,
   MatNativeDateModule,
   MatInputModule,
   MatTabsModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule }         from '@angular/forms';
import { HttpClientModule} from "@angular/common/http";
import { RouterModule } from "@angular/router"; 
import { routes } from "./routes"; 

import { FloatingActionBtnComponent } from './floating-action-btn/floating-action-btn.component';
import { UserRegComponent } from './user-reg/user-reg.component';
import { LoadingComponent } from './loading/loading.component';
import { UsersComponent } from './users/users.component';
import { UsersTableComponent } from './users/users-table/users-table.component';
import { StudentsComponent } from './users/students/students.component';
import { TeachersComponent } from './users/teachers/teachers.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent, 
    FloatingActionBtnComponent, 
    UserRegComponent, 
    LoadingComponent, 
    UsersComponent, UsersTableComponent, StudentsComponent, TeachersComponent,
  ],
  imports: [
    HttpClientModule, 
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCheckboxModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule, 
    MatDialogModule,  
    MatSelectModule, 
    MatAutocompleteModule, 
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatTabsModule,
    RouterModule.forRoot(routes)
  ],
  entryComponents: [
    UserRegComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
