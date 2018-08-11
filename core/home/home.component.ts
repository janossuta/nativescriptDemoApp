import { Component, OnInit } from "@angular/core";
import { alert } from "tns-core-modules/ui/dialogs/dialogs";


@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    constructor() {
        // Use the component constructor to inject providers.
        
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    navigate(){
        alert({
            title: "Your title",
            message: "Your message",
            okButtonText: "Your button text"
        }).then(() => {
            console.log("The user closed the alert.");
        });
    }
}
