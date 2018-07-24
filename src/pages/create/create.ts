import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Logger } from "../../providers/logger/logger";

@IonicPage()
@Component({
    selector: "page-create",
    templateUrl: "create.html"
})
export class CreatePage {
    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private logger: Logger
    ) {}

    ionViewDidLoad() {
        this.logger.info("ionViewDidLoad CreatePage");
    }
}
