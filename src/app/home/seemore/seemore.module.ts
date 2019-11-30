import { NgModule } from '@angular/core';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { SeemoreComponent } from './seemore.component';


@NgModule({
    declarations: [SeemoreComponent],
    imports: [NgxPageScrollModule],
    providers: [],
    bootstrap: [],
    exports: [SeemoreComponent],
})
export class SeemoreModule {}