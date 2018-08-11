import { Component, OnInit } from "@angular/core";
import * as camera from "nativescript-camera";
import { Image } from "ui/image";

const firebase = require("nativescript-plugin-firebase");

@Component({
    selector: "About",
    moduleId: module.id,
    templateUrl: "./about.component.html"
})
export class AboutComponent implements OnInit {

public source:string = null;

    constructor() {
        // Use the component constructor to inject providers.     
    }

    ngOnInit(): void {
        // Init your component properties here.      
   
    }   

    takeApicture(){
        camera.requestPermissions().then(()=>{
            camera.takePicture().
            then((imageAsset) => {
                console.log("Result is an image asset instance");
                let image = new Image();
                image.src = imageAsset;
                this.source = image.src;
            }).catch((err) => {
                console.log("Error -> " + err.message);
            });
        },()=>{
            console.log("Permission rejected!");
        });     
    }

    getData(){ 
        firebase.getValue('/books')
        .then(result => console.log(JSON.stringify(result)))
        .catch(error => console.log("Error: " + error));
    }
}
