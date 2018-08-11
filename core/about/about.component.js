"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var camera = require("nativescript-camera");
var image_1 = require("ui/image");
var firebase = require("nativescript-plugin-firebase");
var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
        this.source = null;
        // Use the component constructor to inject providers.     
    }
    AboutComponent.prototype.ngOnInit = function () {
        // Init your component properties here.      
    };
    AboutComponent.prototype.takeApicture = function () {
        var _this = this;
        camera.requestPermissions().then(function () {
            camera.takePicture().
                then(function (imageAsset) {
                console.log("Result is an image asset instance");
                var image = new image_1.Image();
                image.src = imageAsset;
                _this.source = image.src;
            }).catch(function (err) {
                console.log("Error -> " + err.message);
            });
        }, function () {
            console.log("Permission rejected!");
        });
    };
    AboutComponent.prototype.getData = function () {
        firebase.getValue('/borders')
            .then(function (result) { return console.log(JSON.stringify(result)); })
            .catch(function (error) { return console.log("Error: " + error); });
    };
    AboutComponent = __decorate([
        core_1.Component({
            selector: "About",
            moduleId: module.id,
            templateUrl: "./about.component.html"
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWJvdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDRDQUE4QztBQUM5QyxrQ0FBaUM7QUFFakMsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLDhCQUE4QixDQUFDLENBQUM7QUFPekQ7SUFJSTtRQUZHLFdBQU0sR0FBVSxJQUFJLENBQUM7UUFHcEIsMERBQTBEO0lBQzlELENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQ0ksNkNBQTZDO0lBRWpELENBQUM7SUFFRCxxQ0FBWSxHQUFaO1FBQUEsaUJBY0M7UUFiRyxNQUFNLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxJQUFJLENBQUM7WUFDN0IsTUFBTSxDQUFDLFdBQVcsRUFBRTtnQkFDcEIsSUFBSSxDQUFDLFVBQUMsVUFBVTtnQkFDWixPQUFPLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7Z0JBQ2pELElBQUksS0FBSyxHQUFHLElBQUksYUFBSyxFQUFFLENBQUM7Z0JBQ3hCLEtBQUssQ0FBQyxHQUFHLEdBQUcsVUFBVSxDQUFDO2dCQUN2QixLQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUM7WUFDNUIsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUMsR0FBRztnQkFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDM0MsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLEVBQUM7WUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDeEMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsZ0NBQU8sR0FBUDtRQUNJLFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDO2FBQzVCLElBQUksQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFuQyxDQUFtQyxDQUFDO2FBQ25ELEtBQUssQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxFQUE5QixDQUE4QixDQUFDLENBQUM7SUFDcEQsQ0FBQztJQWpDUSxjQUFjO1FBTDFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsT0FBTztZQUNqQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtTQUN4QyxDQUFDOztPQUNXLGNBQWMsQ0FrQzFCO0lBQUQscUJBQUM7Q0FBQSxBQWxDRCxJQWtDQztBQWxDWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0ICogYXMgY2FtZXJhIGZyb20gXCJuYXRpdmVzY3JpcHQtY2FtZXJhXCI7XHJcbmltcG9ydCB7IEltYWdlIH0gZnJvbSBcInVpL2ltYWdlXCI7XHJcblxyXG5jb25zdCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJBYm91dFwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vYWJvdXQuY29tcG9uZW50Lmh0bWxcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWJvdXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxucHVibGljIHNvdXJjZTpzdHJpbmcgPSBudWxsO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIC8vIFVzZSB0aGUgY29tcG9uZW50IGNvbnN0cnVjdG9yIHRvIGluamVjdCBwcm92aWRlcnMuICAgICBcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICAvLyBJbml0IHlvdXIgY29tcG9uZW50IHByb3BlcnRpZXMgaGVyZS4gICAgICBcclxuICAgXHJcbiAgICB9ICAgXHJcblxyXG4gICAgdGFrZUFwaWN0dXJlKCl7XHJcbiAgICAgICAgY2FtZXJhLnJlcXVlc3RQZXJtaXNzaW9ucygpLnRoZW4oKCk9PntcclxuICAgICAgICAgICAgY2FtZXJhLnRha2VQaWN0dXJlKCkuXHJcbiAgICAgICAgICAgIHRoZW4oKGltYWdlQXNzZXQpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmVzdWx0IGlzIGFuIGltYWdlIGFzc2V0IGluc3RhbmNlXCIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgICAgICAgICBpbWFnZS5zcmMgPSBpbWFnZUFzc2V0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zb3VyY2UgPSBpbWFnZS5zcmM7XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgLT4gXCIgKyBlcnIubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sKCk9PntcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJQZXJtaXNzaW9uIHJlamVjdGVkIVwiKTtcclxuICAgICAgICB9KTsgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGdldERhdGEoKXsgXHJcbiAgICAgICAgZmlyZWJhc2UuZ2V0VmFsdWUoJy9ib3JkZXJzJylcclxuICAgICAgICAudGhlbihyZXN1bHQgPT4gY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzdWx0KSkpXHJcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiICsgZXJyb3IpKTtcclxuICAgIH1cclxufVxyXG4iXX0=