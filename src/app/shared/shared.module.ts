import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatButtonModule, MatSnackBarModule, MatCardModule, MatOptionModule, MatSelectModule, MatDialog, MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';

const sharedModules = [
  BrowserModule, 
  BrowserAnimationsModule, 
  ReactiveFormsModule,
  MatCardModule, 
  MatInputModule, 
  MatButtonModule, 
  MatSnackBarModule,
  FlexLayoutModule,
  MatOptionModule,
  MatSelectModule,
  FormsModule,
  HttpClientModule,
  MatDialogModule 
];

@NgModule({
  imports: sharedModules,
  exports: [...sharedModules],
})
export class SharedModule { }
