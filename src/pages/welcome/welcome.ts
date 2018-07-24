import { Component } from "@angular/core";
import { IonicPage, NavController } from "ionic-angular";
import * as Core from "wallet-base/lib";
import { Logger } from "../../providers/logger/logger";

/**
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
 */
@IonicPage()
@Component({
    selector: "page-welcome",
    templateUrl: "welcome.html"
})
export class WelcomePage {
    mnemonic: String;

    constructor(public navCtrl: NavController, private logger: Logger) {
        this.mnemonic = Core.mnemonic();
        this.logger.info("welcome initialized." + this.mnemonic);
    }

    recoverWallet() {
        // this.navCtrl.push('RecoverPage');
    }

    createWallet() {
        this.navCtrl.push("BrowserPage", {
            browser: {
                title: "百度",
                url: "https://www.baidu.com"
            }
        });
        // this.navCtrl.push('CreatePage');
    }
}
