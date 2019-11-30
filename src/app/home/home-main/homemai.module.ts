import { NgModule } from '@angular/core';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { HomeMainComponent} from './home-main.component';

@NgModule({
    declarations: [
        HomeMainComponent
    ],
    imports: [
        NgxPageScrollModule
    ],
    providers: [],
    exports: [HomeMainComponent],
})

export class HomeMainModule {}