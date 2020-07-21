import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgZorroAntdModule ,NZ_I18N,zh_CN,NzIconModule} from "ng-zorro-antd";

import { NzButtonModule} from "ng-zorro-antd";

import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';

import { Routes, RouterModule } from '@angular/router';
import { AppRoutes } from './app.route';
import { LayoutModule } from './module/layout/layout.module';
import { LoginComponent } from './components/login/login.component';




registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    NzButtonModule,
    NzIconModule,
    NgZorroAntdModule

  ],
  providers: [

    { provide: NZ_I18N, useValue: zh_CN, }],
  bootstrap: [AppComponent]
})
export class AppModule { }
