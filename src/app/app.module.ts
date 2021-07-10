import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA  } from "@angular/core";
import { BrowserModule, HAMMER_GESTURE_CONFIG } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";

import { Camera } from "@ionic-native/camera/ngx";
//import { Camera, CameraOptions } from '@ionic-native/camera';
import { File } from "@ionic-native/file/ngx";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MatStepperModule } from "@angular/material/stepper";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule, MatRadioModule } from "@angular/material";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import * as URL from "./URLs/urls";

import { SocketIoModule, SocketIoConfig } from "ngx-socket-io";
import { LocalNotifications } from "@ionic-native/local-notifications/ngx";

//const config: SocketIoConfig = { url: 'http://localhost:8080', options: {} };
// const config: SocketIoConfig = { url: 'http://147.83.118.92:8080', options: {} };


//const config: SocketIoConfig = { url: 'http://localhost:8080', options: {} };



const config: SocketIoConfig = { url: URL.Servidor, options: {} };

import { Geolocation } from "@ionic-native/geolocation/ngx";
// import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
// import { Transfer } from '@ionic-native/transfer';
import { Media } from "@ionic-native/media/ngx";
import { LongPressModule } from "ionic-long-press";
import { IonicGestureConfig } from "../ionicGestureConfig";
import { WheelSelector } from "@ionic-native/wheel-selector/ngx";

import { DateAdapter } from "@angular/material";
import { CustomDateAdapter } from "./customDataAdapter";
import {DatePipe} from "@angular/common";

@NgModule({
	declarations: [AppComponent],
	entryComponents: [],
	imports: [
		BrowserModule,
		IonicModule.forRoot(),
		AppRoutingModule,
		HttpModule,
		HttpClientModule,
		MatStepperModule,
		MatFormFieldModule,
		MatInputModule,
		FormsModule,
		ReactiveFormsModule,
		BrowserAnimationsModule,
		LongPressModule,
		SocketIoModule.forRoot(config)

	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
	providers: [
		StatusBar,
		SplashScreen,
		Camera,
		File,
		Geolocation,
		WheelSelector,
		LocalNotifications,
		DatePipe,
		Media,
		{provide: HAMMER_GESTURE_CONFIG, useClass: IonicGestureConfig},
		{provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
		{provide: DateAdapter, useClass: CustomDateAdapter}
	],
	bootstrap: [AppComponent]
})
export class AppModule {}
