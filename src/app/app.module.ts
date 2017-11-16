import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ImageListComponent } from './image-list/image-list.component';
import { ImageService } from "./shared/image.service";

import { MatCardModule, MatButtonModule, MatInputModule, MatIconModule } from "@angular/material";
import { MasonryModule } from "angular2-masonry";
import { BRowserAnimationModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    ImageListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule, 
    MatIconModule,
    BRowserAnimationModule
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
