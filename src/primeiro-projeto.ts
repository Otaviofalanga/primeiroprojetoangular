//import { bootstrapApplication } from '@angular/platform-browser';
//import { appConfig } from './app/app.config';
//import { AppComponent } from './app/app.component';
import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

//bootstrapApplication(AppComponent, appConfig)
  //.catch((err) => console.error(err));

  @Component({
    selector: 'menu-nested-example',
    standalone: true,
    imports: [

      MatIconModule,
      MatButtonModule,
      MatToolbarModule,
          
    ],

    templateUrl: 'primeiro-projeto.html',
    styleUrl: 'primeiro-projeto.css'
  })
  export class MenuNestedExample {}