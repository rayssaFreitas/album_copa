import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumComponent } from './album/album.component';
import { CopaRoutingModule } from './copa.routing';
import { TrocaDialogComponent } from './troca-dialog/troca-dialog.component';
import { FigurinhaComponent } from './figurinha/figurinha.component';
import { InfosDialogComponent } from './infos-dialog/infos-dialog.component';
import { FlexLayoutModule } from '@angular/flex-layout';


import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';




@NgModule({
  declarations: [
    AlbumComponent,
    TrocaDialogComponent,
    FigurinhaComponent,
    InfosDialogComponent
  ],
  imports: [
    CommonModule,
    CopaRoutingModule,
    FlexLayoutModule,

    //Material
    MatCardModule,
    MatDialogModule,
    MatIconModule
  ]
})
export class CopaModule { }
