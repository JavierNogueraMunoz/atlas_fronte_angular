import { Component,  ChangeDetectionStrategy, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, } from '@angular/forms';
import { AppSettings } from 'src/app/shared/app.settings';
import { dniCustomValidator,emailCustomValidator, captationCustomValidator,newsletterCustomValidator } from '../../shared/custom.validators';
import { User } from '../../shared/models/user.model';
import { UsersService } from './users.service';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserFormComponent implements OnInit {
 
  public rForm: FormGroup;
  public user: User;
  newsletters: string[] = ['Yes','No'];
  captations: string[] = ['web','telefonica','presencial'];

  constructor(private fb: FormBuilder, private userService: UsersService,public dialog: MatDialog) {
   
  }
  ngOnInit():void {
    this.initUser();
    this.rForm = this.fb.group({
      dni: [this.user.dni, [Validators.required,dniCustomValidator]],
      email: [this.user.email, [Validators.required, emailCustomValidator,Validators.maxLength(AppSettings.NAME_MAX_LENGHT)]],
      name: [this.user.name, [Validators.required, Validators.maxLength(AppSettings.NAME_MAX_LENGHT)]],
      captation : [this.user.captation, [captationCustomValidator, Validators.maxLength(AppSettings.NAME_MAX_LENGHT)]],
      newsletter : [this.user.newsletter, [newsletterCustomValidator, Validators.maxLength(AppSettings.NAME_MAX_LENGHT)]],
      address : [this.user.address, [ Validators.maxLength(AppSettings.ADDRESS_MAX_LENGHT)]],
      postal_code : [this.user.postal_code, [ Validators.maxLength(AppSettings.POSTAL_CODE_MAX_LENGHT)]],
      city : [this.user.city, [ Validators.maxLength(AppSettings.CITY_MAX_LENGHT)]],
      region : [this.user.region, [ Validators.maxLength(AppSettings.REGION_MAX_LENGHT)]],
      country : [this.user.country, [ Validators.maxLength(AppSettings.COUNTRY_MAX_LENGHT)]],
      observation :[this.user.observation],
    });
  }
  public hasError(formField: string, validators: string[]): boolean {
    return (
      this.rForm.controls[formField].touched &&
      validators.some(validator => this.rForm.controls[formField].hasError(validator))
    );
  }
  saveUser() {
    this.userService.addUser({...this.rForm.value}).subscribe((_user) => {this.initUser()},(error)=>{console.log(error)});
  }
  getUser(_param){
    const param = _param === 'dni' ? `dni=${this.rForm.value.dni}`:`email=${this.rForm.value.email}`;
    this.userService.getUser(param).subscribe(
      (_user )=> {
        if(_user) this.openDialog(_user);
      },
      (error)=> {console.log(error)},()=> { console.log('fin')}
    );
  }
  openDialog(_user): void {
    const dialogRef = this.dialog.open(UserFormComponentDialog, {
      width: '250px',
      data: _user
    });

    dialogRef.afterClosed().subscribe(_user => {
      _user ? this.fillUser(_user):this.initUser();
    });
  }
  fillUser(_user){
    this.user = {..._user};
  }
  initUser(){
    this.user = {
      dni:'',
      email:'',
      name:'',
      captation : '',
      newsletter : '',
      address :'',
      postal_code : '',
      city :'',
      region : '',
      country : '',
      observation :'',
    }
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class UserFormComponentDialog {

  constructor(
    public dialogRef: MatDialogRef<UserFormComponentDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}