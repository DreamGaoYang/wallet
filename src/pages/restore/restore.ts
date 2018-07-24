import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Logger } from "../../providers/logger/logger";

@IonicPage()
@Component({
    selector: "page-restore",
    templateUrl: "restore.html"
})
export class RestorePage {
    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private logger: Logger
    ) {}

    ionViewDidLoad() {
        this.logger.info("ionViewDidLoad RestorePage");
    }
}
