import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Logger } from "../../providers/logger/logger";

@IonicPage()
@Component({
    selector: "page-backup",
    templateUrl: "backup.html"
})
export class BackupPage {
    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private logger: Logger
    ) {}

    ionViewDidLoad() {
        this.logger.info("ionViewDidLoad BackupPage");
    }
}
