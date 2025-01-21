import { NgModule } from "@angular/core";
import { CardComponent } from "./card/card.component";


@NgModule({
    declarations: [
        // List all components that belong to this module
        CardComponent
    ],
    exports: [CardComponent], // List all components that need to be accessible to other modules
})
export class SharedModule { }
