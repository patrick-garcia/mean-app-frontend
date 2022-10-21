import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';

import { MainComponent } from './views/main/main.component';
import { AddPolicyComponent } from './views/add-policy/add-policy.component';
import { EditPolicyComponent } from './views/edit-policy/edit-policy.component';
import { FormInputComponent } from './components/form-input/form-input.component';
import { FormInputDateComponent } from './components/form-input-date/form-input-date.component';
import { FormInputTextareaComponent } from './components/form-input-textarea/form-input-textarea.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AddPolicyComponent,
    EditPolicyComponent,
    FormInputComponent,
    FormInputDateComponent,
    FormInputTextareaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }