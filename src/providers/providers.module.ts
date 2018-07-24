import { NgModule } from "@angular/core";
import { Logger } from "./index";

@NgModule({
    providers: [Logger, { provide: "console", useValue: console }]
})
export class ProvidersModule {}
