import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumComponent } from './album/album.component';
import { CopaRoutingModule } from './copa.routing';

import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TrocaDialogComponent } from './troca-dialog/troca-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { FigurinhaComponent } from './figurinha/figurinha.component';





@NgModule({
  declarations: [
    AlbumComponent,
    TrocaDialogComponent,
    FigurinhaComponent
  ],
  imports: [
    CommonModule,
    CopaRoutingModule,
    FlexLayoutModule,

    //Material
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule
  ]
})
export class CopaModule { }
