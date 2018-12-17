webpackJsonp([1],{

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatbotPageModule", function() { return ChatbotPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chatbot__ = __webpack_require__(274);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChatbotPageModule = /** @class */ (function () {
    function ChatbotPageModule() {
    }
    ChatbotPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__chatbot__["a" /* ChatbotPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__chatbot__["a" /* ChatbotPage */]),
            ],
        })
    ], ChatbotPageModule);
    return ChatbotPageModule;
}());

//# sourceMappingURL=chatbot.module.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatbotPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ChatbotPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChatbotPage = /** @class */ (function () {
    function ChatbotPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.imageSrc = [
            "./assets/imgs/chatbot2/Page 1.png",
            "./assets/imgs/chatbot2/L1.png",
            "./assets/imgs/chatbot2/L3.png",
            "./assets/imgs/chatbot2/L4.png",
            "./assets/imgs/chatbot2/L5.png",
            "./assets/imgs/chatbot2/L6.png",
            "./assets/imgs/chatbot2/L7.png",
            "./assets/imgs/chatbot2/L8.png",
            "./assets/imgs/chatbot2/L9.png",
            "./assets/imgs/chatbot2/L10.png",
            "./assets/imgs/chatbot2/L11.png",
            "./assets/imgs/chatbot2/L12.png",
        ];
        this.imageIndex = 0;
        this.trending = [];
        this.trending = [
            {
                title: "HK$ 1980.00",
                news: "Travel + Annual Plan Golden Plan",
                type: "B",
                image: './assets/imgs/zurich.png',
            },
            {
                title: "HK$ 1380.00",
                news: "HK Chubb TravelWell Annual Protection Plan - Plan 3",
                type: "B",
                image: './assets/imgs/CHUBB.png'
            },
            {
                title: "HK$ 1500.60",
                news: "SmartTraveller Classic Plan (Annual Plan)",
                type: "B",
                image: './assets/imgs/axa.png'
            }
        ];
    }
    ChatbotPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChatbotPage');
    };
    ChatbotPage.prototype.onClickImage = function () {
        if (this.imageIndex > 13) {
            this.navCtrl.push("Chatbot2Page");
        }
        else {
            this.imageIndex++;
        }
    };
    ChatbotPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chatbot',template:/*ion-inline-start:"/Users/eugene/Desktop/Programming/byDate/18_11/insurTech/src/pages/chatbot/chatbot.html"*/'<!--\n  Generated template for the ChatbotPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content>\n  <img [src]="imageSrc[imageIndex]" class="moveTop" alt="" (click)="onClickImage()">\n  <div style="position:absolute; top:40vh">\n  <div *ngIf="imageIndex == 10" padding-left class="itemCards ">\n      <div *ngFor="let news of trending" class="itemCard mr1 pl1 pr1 pb1 pt1 border-radius-1 glow-1" >\n        <div class="imageContainer">\n        <img [src]="news.image"></div>\n        <div *ngIf="\'A\' == news.type" class="itemCardSquare w100 ">\n          <h2 text-left no-margin class="bolder pb1">{{news.title}}</h2><p class="">{{news.news}}</p>\n        </div>\n        <div *ngIf="\'B\' == news.type" class="itemCardRect w100">\n          <h2 text-left no-margin class="bolder">{{news.title}}</h2><p class="">{{news.news}}</p>\n        </div>\n      </div>\n      <!-- <div class="itemCard mr1 pl1 pr1 pb1 pt1 border-radius-1 glow-1">\n          News: Some companies are using drones to capture potential problems and then files a report for their clients.\n        </div>\n        <div class="itemCardSquare mr1 pl1 pr1 pb1 pt1 border-radius-1 glow-1">\n          abc\n        </div> -->\n    </div>\n  </div>\n    {{imageIndex}}\n</ion-content>\n'/*ion-inline-end:"/Users/eugene/Desktop/Programming/byDate/18_11/insurTech/src/pages/chatbot/chatbot.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ChatbotPage);
    return ChatbotPage;
}());

//# sourceMappingURL=chatbot.js.map

/***/ })

});
//# sourceMappingURL=1.js.map