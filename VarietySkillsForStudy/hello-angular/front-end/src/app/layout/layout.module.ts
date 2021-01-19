import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test/test.component';
import { HeaderComponent} from '../header/header.component';
import { FooterComponent} from '../footer/footer.component';


@NgModule({
  declarations: [
    // TestComponent
    HeaderComponent,
    FooterComponent,
  ],
  exports: [
    // TestComponent
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
