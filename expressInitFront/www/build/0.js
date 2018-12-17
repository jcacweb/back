webpackJsonp([0],{

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chatbot2PageModule", function() { return Chatbot2PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chatbot2__ = __webpack_require__(273);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Chatbot2PageModule = /** @class */ (function () {
    function Chatbot2PageModule() {
    }
    Chatbot2PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__chatbot2__["a" /* Chatbot2Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__chatbot2__["a" /* Chatbot2Page */]),
            ],
        })
    ], Chatbot2PageModule);
    return Chatbot2PageModule;
}());

//# sourceMappingURL=chatbot2.module.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Chatbot2Page; });
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
 * Generated class for the Chatbot2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Chatbot2Page = /** @class */ (function () {
    function Chatbot2Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
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
    Chatbot2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Chatbot2Page');
    };
    Chatbot2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chatbot2',template:/*ion-inline-start:"/Users/eugene/Desktop/Programming/byDate/18_11/insurTech/src/pages/chatbot2/chatbot2.html"*/'<!--\n  Generated template for the Chatbot2Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content >\n  <img src="" alt="">\n  \n</ion-content>\n'/*ion-inline-end:"/Users/eugene/Desktop/Programming/byDate/18_11/insurTech/src/pages/chatbot2/chatbot2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], Chatbot2Page);
    return Chatbot2Page;
}());

//# sourceMappingURL=chatbot2.js.map

/***/ })

});
//# sourceMappingURL=0.js.map