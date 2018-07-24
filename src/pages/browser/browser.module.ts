import { NgModule } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { IonicPageModule } from "ionic-angular";

import { BrowserPage } from "./browser";

@NgModule({
    declarations: [BrowserPage],
    imports: [
        IonicPageModule.forChild(BrowserPage),
        TranslateModule.forChild()
    ],
    exports: [BrowserPage]
})
export class BrowserPageModule {}
