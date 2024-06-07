//import { bootstrapApplication } from '@angular/platform-browser';
//import { appConfig } from './app/app.config';
//import { AppComponent } from './app/app.component';
import { Component, NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

//bootstrapApplication(AppComponent, appConfig) 

//.catch ((err) => console.error(err));

@Component({
  selector: 
  standalone: true,
  imports: [

    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSlideToggleModule,

  ],


  templateUrl: 
  styleUrl: 
})
export class  { }

@NgModule ({
  imports: [
    MatSlideToggleModule,
  ]
})
class AppModule {}


