import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  exports: [MatButtonModule,MatIconModule],
  imports: [MatButtonModule,MatIconModule]
})
export class MaterialModule { }
