import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder,  Validators } from '@angular/forms'; 
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user-reg',
  templateUrl: './user-reg.component.html',
  styleUrls: ['./user-reg.component.scss']
})
export class UserRegComponent implements OnInit {

  private loading: boolean = false; 
  private form: FormGroup; 
  constructor(
    public _dialog: MatDialogRef<UserRegComponent>,
    @Inject(MAT_DIALOG_DATA)  private $data, 
    public _from: FormBuilder, 
    public _user: UserService
  ) { }

  ngOnInit() {
    this.form = this._from.group({
      regId: ["", [Validators.required]], 
      firstName: ["", [Validators.required]], 
      middleName: ["", [Validators.required]], 
      lastName: ["", [Validators.required]], 
      gender: ["", [Validators.required]], 
      role: ["", [Validators.required]], 
      phone: ["", [Validators.required]], 
      email: ["", [Validators.required, Validators.email]]
    }); 

    this.form.valueChanges.subscribe(
      value => {
        console.log(value); 
      }
    )
  }

  submit(){
    this.loading = true; 
    this._user.register(this.form.value).subscribe(
      responce => {
        this.loading = false;
        //this.form.reset();  
      }, 
      error => {
        this.loading = false; 
      }
    ); 
    return false; 
  }

  get regId(){ return this.form.get('regId'); }
  get firstName(){ return this.form.get('firstName'); }
  get middleName(){ return this.form.get('middleName'); }
  get lastName(){ return this.form.get('lastName'); }
  get gender(){ return this.form.get('gender'); }
  get role(){ return this.form.get('role'); }
  get phone(){ return this.form.get('phone'); }
  get email(){ return this.form.get('email'); }
}
