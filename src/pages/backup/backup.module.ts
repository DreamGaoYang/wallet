import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { BackupPage } from "./backup";

@NgModule({
    declarations: [BackupPage],
    imports: [IonicPageModule.forChild(BackupPage)],
    exports: [BackupPage]
})
export class BackupPageModule {}
