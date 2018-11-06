import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder,  Validators } from '@angular/forms'; 
import { UserService } from '../service/user.service';
import { controlNameBinding } from '@angular/forms/src/directives/reactive_directives/form_control_name';

@Component({
  selector: 'app-user-reg',
  templateUrl: './user-reg.component.html',
  styleUrls: ['./user-reg.component.scss']
})
export class UserRegComponent implements OnInit {

  private loading: boolean = false; 
  private isRegister: boolean = true; 
  private form: FormGroup; 

  constructor(
    public _dialog: MatDialogRef<UserRegComponent>,
    @Inject(MAT_DIALOG_DATA)  private $data, 
    public _from: FormBuilder, 
    public _user: UserService
  ) {
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
   }

  ngOnInit() {
    // if(typeof this.$data.user != 'undefined'){
    //   this.form.patchValue(this.$data.user); 
    //   this.isRegister = false; 
    // }

    this.form.controls.regId.valueChanges.subscribe(
      (value) => {
        this._user.idExist(value).subscribe(
          (exist) => {
            if(exist)
              this.form.controls.regId.setErrors({exist: exist});
          }
        ); 
      }
    )

    this.form.controls.phone.valueChanges.subscribe(
      (value) => {
        this._user.phoneExist(value).subscribe(
          (exist) => {
            if(exist)this.form.controls.phone.setErrors({exist: exist});
          }
        ); 
      }
    )

    this.form.controls.email.valueChanges.subscribe(
      (value) => {
        this._user.emailExist(value).subscribe(
          (exist) => {
            if(exist)this.form.controls.email.setErrors({exist: exist});
          }
        ); 
      }
    )
  }

  submit(){
    this.loading = true; 
    if(this.isRegister){
      this._user.register(this.form.value).subscribe(
            _responce => {this.loading = false; }, 
            _error => {this.loading = false; }, 
          ); 
    }else{
      this._user.update(this.$data.user.id, this.form.value).subscribe(
        _responce => {}, 
        _error => {}
      )
    }
    
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
