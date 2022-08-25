import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumComponent } from './album/album.component';
import { CopaRoutingModule } from './copa.routing';



@NgModule({
  declarations: [
    AlbumComponent
  ],
  imports: [
    CommonModule,
    CopaRoutingModule
  ]
})
export class CopaModule { }
