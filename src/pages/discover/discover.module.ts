import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { DiscoverPage } from './discover';

@NgModule({
    declarations: [
        DiscoverPage,
    ],
    imports: [
        IonicPageModule.forChild(DiscoverPage),
        TranslateModule.forChild()
    ],
    exports: [
        DiscoverPage
    ]
})
export class DiscoverPageModule { }
