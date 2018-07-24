import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { RestorePage } from "./restore";

@NgModule({
    declarations: [RestorePage],
    imports: [IonicPageModule.forChild(RestorePage)],
    exports: [RestorePage]
})
export class RestorePageModule {}
