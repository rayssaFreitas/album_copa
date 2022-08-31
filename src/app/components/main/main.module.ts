import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { routing } from 'src/app/app-routing.module';

import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    MainComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    routing,
    CommonModule,
    FlexLayoutModule,

    //Material
    MatCardModule,
    MatIconModule
  ],
  exports: [
    MainComponent,
    FooterComponent,
    HeaderComponent
  ]
})
export class MainModule { }
