import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from'@angular/platform-browser/animations';
import { AuthModule } from '../auth/auth.module';

@NgModule({
  declarations: [],
  imports: [
    BrowserAnimationsModule,
    AuthModule
  ]
})
export class CoreModule { }
