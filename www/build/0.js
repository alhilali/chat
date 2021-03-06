webpackJsonp([0],{

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPageModule", function() { return ChatPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_components_module__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chat__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic2_rating__ = __webpack_require__(429);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ChatPageModule = /** @class */ (function () {
    function ChatPageModule() {
    }
    ChatPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__chat__["a" /* ChatPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__chat__["a" /* ChatPage */]),
                __WEBPACK_IMPORTED_MODULE_4_ionic2_rating__["a" /* Ionic2RatingModule */]
            ],
        })
    ], ChatPageModule);
    return ChatPageModule;
}());

//# sourceMappingURL=chat.module.js.map

/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Restaurant; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__menuItem__ = __webpack_require__(424);

var Restaurant = /** @class */ (function () {
    function Restaurant(name, type, location, logo) {
        this.total = 0;
        this.name = name;
        this.type = type;
        this.menu = new Array();
        if (logo != null)
            this.logoImage = logo;
        if (location != null)
            this.location = location;
    }
    Restaurant.prototype.addMenuItem = function (name, price, image) {
        var menuItem = new __WEBPACK_IMPORTED_MODULE_0__menuItem__["a" /* MenuItem */](name, price, image);
        this.menu.push(menuItem);
    };
    Restaurant.prototype.addMenu = function (menu) {
        var _this = this;
        menu.forEach(function (item) {
            _this.addMenuItem(item.name, item.price, item.image);
        });
    };
    Restaurant.prototype.findOrder = function (item, item2) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var text = item + " " + item2;
            console.log(text);
            var twoWordIndex = _this.menu.findIndex(function (k) { return k.name.indexOf(text) >= 0; });
            console.log(twoWordIndex);
            if (twoWordIndex >= 0)
                resolve([twoWordIndex, true]);
            else
                resolve([_this.menu.findIndex(function (k) { return k.name.indexOf(item) >= 0; }), false]);
        });
    };
    Restaurant.prototype.resetMenu = function () {
        this.menu.forEach(function (item) {
            item.quantitiy = 0;
        });
    };
    Restaurant.prototype.setTotal = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var total = 0;
            _this.menu.forEach(function (item, index) {
                total += item.price * item.quantitiy;
                if (index == _this.menu.length - 1) {
                    _this.total = total;
                    resolve(_this.total);
                }
            });
        });
    };
    return Restaurant;
}());

//# sourceMappingURL=restaurant.js.map

/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuggestionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
 * Generated class for the SuggestionsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var SuggestionsComponent = /** @class */ (function () {
    function SuggestionsComponent() {
        var _this = this;
        this.notify = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.originalSuggestions = ['ايش فيه مطاعم حولي؟', 'ابغى اطلب من شاورمر', 'واحد تويستر من كنتاكي', 'مشتهي برقر وش تنصح؟', 'وش صار على الطلب؟', 'وريني آخر العروض'];
        this.suggestions = this.originalSuggestions;
        this.state = '*';
        console.log('Hello SuggestionsComponent Component');
        setTimeout(function () {
            _this.state = 'show';
        }, 2000);
    }
    SuggestionsComponent.prototype.pickSuggestion = function (suggestion) {
        this.state = '*';
        this.notify.emit(suggestion);
    };
    SuggestionsComponent.prototype.displaySuggestion = function (suggestion) {
        this.suggestions = [suggestion];
        this.state = 'show';
    };
    SuggestionsComponent.prototype.hideSuggestions = function () {
        this.state = '*';
    };
    SuggestionsComponent.prototype.showSuggestions = function () {
        this.suggestions = this.originalSuggestions;
        this.state = 'show';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]) === "function" && _a || Object)
    ], SuggestionsComponent.prototype, "notify", void 0);
    SuggestionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'suggestions',template:/*ion-inline-start:"/Users/saudalhilali/Desktop/startUp/foodee/src/components/suggestions/suggestions.html"*/'<!-- Generated template for the SuggestionsComponent component -->\n<div [@fadeInOut]="state" class="suggestions">\n  <ion-scroll class="scrollable" scrollX="true">\n    <ion-row style="direction: rtl; width: 100vh;" nowrap>\n      <span *ngFor="let suggestion of suggestions">\n        <ion-chip (click)=\'pickSuggestion(suggestion)\' class="suggestion-chip">\n          <ion-label>{{suggestion}}</ion-label>\n        </ion-chip>\n      </span>\n    </ion-row>\n  </ion-scroll>\n</div>'/*ion-inline-end:"/Users/saudalhilali/Desktop/startUp/foodee/src/components/suggestions/suggestions.html"*/,
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* trigger */])('fadeInOut', [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* state */])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ opacity: '0' })),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* state */])('show', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ opacity: '1' })),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* transition */])('show <=> *', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* animate */])('300ms ease-in'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], SuggestionsComponent);
    return SuggestionsComponent;
    var _a;
}());

//# sourceMappingURL=suggestions.js.map

/***/ }),

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RATING_CONTROL_VALUE_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ionic2Rating; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(23);


var noop = function () {
};
var RATING_CONTROL_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NG_VALUE_ACCESSOR */],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* forwardRef */])(function () { return Ionic2Rating; }),
    multi: true
};
var Ionic2Rating = (function () {
    function Ionic2Rating() {
        this._max = 5;
        this._readOnly = false;
        this._emptyStarIconName = 'star-outline';
        this._halfStarIconName = 'star-half';
        this._starIconName = 'star';
        this._nullable = false;
        this.onChangeCallback = noop;
    }
    Object.defineProperty(Ionic2Rating.prototype, "max", {
        get: function () {
            return this._max;
        },
        set: function (val) {
            this._max = this.getNumberPropertyValue(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ionic2Rating.prototype, "readOnly", {
        get: function () {
            return this._readOnly;
        },
        set: function (val) {
            this._readOnly = this.isTrueProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ionic2Rating.prototype, "emptyStarIconName", {
        get: function () {
            return this._emptyStarIconName;
        },
        set: function (val) {
            this._emptyStarIconName = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ionic2Rating.prototype, "halfStarIconName", {
        get: function () {
            return this._halfStarIconName;
        },
        set: function (val) {
            this._halfStarIconName = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ionic2Rating.prototype, "starIconName", {
        get: function () {
            return this._starIconName;
        },
        set: function (val) {
            this._starIconName = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ionic2Rating.prototype, "nullable", {
        get: function () {
            return this._nullable;
        },
        set: function (val) {
            this._nullable = this.isTrueProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    Ionic2Rating.prototype.ngOnInit = function () {
        // ngFor needs an array
        this.starIndexes = Array(this.max).fill(1).map(function (x, i) { return i; });
    };
    Ionic2Rating.prototype.getStarIconName = function (starIndex) {
        if (this.value === undefined) {
            return this.emptyStarIconName;
        }
        if (this.value > starIndex) {
            if (this.value < starIndex + 1) {
                return this.halfStarIconName;
            }
            else {
                return this.starIconName;
            }
        }
        else {
            return this.emptyStarIconName;
        }
    };
    Object.defineProperty(Ionic2Rating.prototype, "value", {
        get: function () {
            return this.innerValue;
        },
        set: function (value) {
            if (value !== this.innerValue) {
                this.innerValue = value;
                this.onChangeCallback(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Ionic2Rating.prototype.writeValue = function (value) {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    };
    Ionic2Rating.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    Ionic2Rating.prototype.registerOnTouched = function (fn) {
    };
    Ionic2Rating.prototype.onKeyDown = function (event) {
        if (/(37|38|39|40)/.test(event.which)) {
            event.preventDefault();
            event.stopPropagation();
            var newValue = this.value + ((event.which == 38 || event.which == 39) ? 1 : -1);
            return this.rate(newValue);
        }
    };
    Ionic2Rating.prototype.rate = function (value) {
        if (this.readOnly || value < 0 || value > this.max) {
            return;
        }
        if (value === this.value && this.nullable) {
            value = null;
        }
        this.value = value;
    };
    Ionic2Rating.prototype.isTrueProperty = function (val) {
        if (typeof val === 'string') {
            val = val.toLowerCase().trim();
            return (val === 'true' || val === 'on');
        }
        return !!val;
    };
    Ionic2Rating.prototype.getNumberPropertyValue = function (val) {
        if (typeof val === 'string') {
            return parseInt(val.trim());
        }
        return val;
    };
    Ionic2Rating.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                    selector: 'rating',
                    styles: ["\n    ul.rating li {\n      display: inline;\n      border: 0px;\n      background: none;\n      padding: 5px 10px;\n    }\n    ul.rating li i {\n      font-size: 30px;\n    }\n  "],
                    template: "\n    <ul class=\"rating\" (keydown)=\"onKeyDown($event)\">\n      <li *ngFor=\"let starIndex of starIndexes\" tappable (click)=\"rate(starIndex + 1)\">\n        <ion-icon [name]=\"getStarIconName(starIndex)\">\n        </ion-icon>\n      </li>\n    </ul>",
                    providers: [RATING_CONTROL_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    Ionic2Rating.ctorParameters = [];
    Ionic2Rating.propDecorators = {
        'max': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
        'readOnly': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
        'emptyStarIconName': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
        'halfStarIconName': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
        'starIconName': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
        'nullable': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    };
    return Ionic2Rating;
}());
//# sourceMappingURL=ionic2-rating.js.map

/***/ }),

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__suggestions_suggestions__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__payment_payment__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__order_status_order_status__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__menu_list_menu_list__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__restaurants_list_restaurants_list__ = __webpack_require__(425);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__suggestions_suggestions__["a" /* SuggestionsComponent */],
                __WEBPACK_IMPORTED_MODULE_3__payment_payment__["a" /* PaymentComponent */],
                __WEBPACK_IMPORTED_MODULE_4__order_status_order_status__["a" /* OrderStatusComponent */],
                __WEBPACK_IMPORTED_MODULE_5__menu_list_menu_list__["a" /* MenuListComponent */],
                __WEBPACK_IMPORTED_MODULE_6__restaurants_list_restaurants_list__["a" /* RestaurantsListComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__suggestions_suggestions__["a" /* SuggestionsComponent */]),
                __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__payment_payment__["a" /* PaymentComponent */]),
                __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__order_status_order_status__["a" /* OrderStatusComponent */]),
                __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__menu_list_menu_list__["a" /* MenuListComponent */]),
                __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_6__restaurants_list_restaurants_list__["a" /* RestaurantsListComponent */])
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__suggestions_suggestions__["a" /* SuggestionsComponent */],
                __WEBPACK_IMPORTED_MODULE_3__payment_payment__["a" /* PaymentComponent */],
                __WEBPACK_IMPORTED_MODULE_4__order_status_order_status__["a" /* OrderStatusComponent */],
                __WEBPACK_IMPORTED_MODULE_5__menu_list_menu_list__["a" /* MenuListComponent */],
                __WEBPACK_IMPORTED_MODULE_6__restaurants_list_restaurants_list__["a" /* RestaurantsListComponent */]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
 * Generated class for the PaymentComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var PaymentComponent = /** @class */ (function () {
    function PaymentComponent() {
        this.notify = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.type = 'cash';
        this.change = '50';
        console.log('Hello PaymentComponent Component');
    }
    PaymentComponent.prototype.sendOrder = function (type) {
        this.notify.emit(this.type);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], PaymentComponent.prototype, "notify", void 0);
    PaymentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'payment',template:/*ion-inline-start:"/Users/saudalhilali/Desktop/startUp/foodee/src/components/payment/payment.html"*/'<!-- Generated template for the PaymentComponent component -->\n<ion-card class="receipt fancy-card">\n  <ion-card-header class="receipt-header" text-center>\n    <ion-segment [(ngModel)]="type">\n      <ion-segment-button class="payment-button" value="cash">\n        <ion-icon name="cash"></ion-icon>\n      </ion-segment-button>\n      <ion-segment-button class="payment-button" value="card">\n        <ion-icon name="card"></ion-icon>\n      </ion-segment-button>\n    </ion-segment>\n  </ion-card-header>\n  <ion-card-content padding-horizontal>\n    <div [ngSwitch]="type">\n      <div *ngSwitchCase="\'cash\'">\n        <div padding text-center>\n          <p padding-bottom>💰 تحتاج صرف؟</p>\n          <ion-segment dir="rtl" [(ngModel)]="change">\n            <ion-segment-button class="change-button" value="50">\n              <ion-icon name="md-cash"></ion-icon>\n              <h4>50 ريال</h4>\n            </ion-segment-button>\n            <ion-segment-button class="change-button" value="100">\n              <ion-icon name="md-cash"></ion-icon>\n              <h4>100 ريال</h4>\n            </ion-segment-button>\n            <ion-segment-button class="change-button" value="500">\n              <ion-icon name="md-cash"></ion-icon>\n              <h4>500 ريال</h4>\n            </ion-segment-button>\n          </ion-segment>\n        </div>\n      </div>\n      <div *ngSwitchCase="\'card\'">\n        <div class="card-container">\n          <img src="http://www.pngmart.com/files/3/Credit-Card-Visa-And-Master-Card-Transparent-PNG.png" alt="">\n          <ion-item>\n            <ion-input type="text" placeholder="NAME ON CARD"></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-input type="text" placeholder="CARD NUMBER"></ion-input>\n          </ion-item>\n          <ion-row wrap justify-content-start>\n            <ion-col col-3>\n              <ion-item>\n                <ion-input type="text" placeholder="02"></ion-input>\n              </ion-item>\n\n            </ion-col>\n            <ion-col col-4>\n              <ion-item>\n                <ion-input type="text" placeholder="2017"></ion-input>\n              </ion-item>\n            </ion-col>\n\n            <ion-col push-1 col-4 style="padding-right: 0px;">\n              <ion-item>\n                <ion-input type="text" placeholder="CV"></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n        </div>\n      </div>\n    </div>\n  </ion-card-content>\n</ion-card>\n<div class="bottom-btns">\n  <button ion-button color="red" block (click)="sendOrder()">ارسل الطلب</button>\n</div>'/*ion-inline-end:"/Users/saudalhilali/Desktop/startUp/foodee/src/components/payment/payment.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], PaymentComponent);
    return PaymentComponent;
}());

//# sourceMappingURL=payment.js.map

/***/ }),

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderStatusComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
 * Generated class for the OrderStatusComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var OrderStatusComponent = /** @class */ (function () {
    function OrderStatusComponent() {
        console.log('Hello OrderStatusComponent Component');
        this.text = 'Hello World';
    }
    OrderStatusComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'order-status',template:/*ion-inline-start:"/Users/saudalhilali/Desktop/startUp/foodee/src/components/order-status/order-status.html"*/'<!-- Generated template for the PaymentComponent component -->\n<ion-card class="receipt fancy-card">\n  <ion-card-header class="receipt-header" text-center>\n    <h2 dir="rtl">طلبك جاي في الطريق! 🚘</h2>\n  </ion-card-header>\n  <ion-card-content padding-horizontal>\n    <div>\n\n      <div class="tracking-progress-bar">\n        <div class="tracking-progress-bar__item tracking-progress-bar__item--first tracking-progress-bar__item--active">1</div>\n\n        <span class="tracking-progress-bar__item__bar tracking-progress-bar__item__bar--active"></span>\n        <div class="tracking-progress-bar__item tracking-progress-bar__item--active">2</div>\n\n        <span class="tracking-progress-bar__item__bar"></span>\n        <div class="tracking-progress-bar__item">3</div>\n\n        <span class="tracking-progress-bar__item__bar"></span>\n        <div class="tracking-progress-bar__item">4</div>\n      </div>\n      <!-- boleto__wrapper -->\n    </div>\n    <div class="status-info" text-center>\n      <h4 dir="rtl">حاليًا يتم تحضير الطلب ⏳</h4>\n    </div>\n  </ion-card-content>\n</ion-card>'/*ion-inline-end:"/Users/saudalhilali/Desktop/startUp/foodee/src/components/order-status/order-status.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], OrderStatusComponent);
    return OrderStatusComponent;
}());

//# sourceMappingURL=order-status.js.map

/***/ }),

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_restaurant__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
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
 * Generated class for the MenuListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var MenuListComponent = /** @class */ (function () {
    function MenuListComponent() {
    }
    MenuListComponent.prototype.loadMoreItems = function (restaurant) {
        restaurant.addMenuItem('وجبة دينر', 16, 'https://ocs-pl.oktawave.com/v1/AUTH_876e5729-f8dd-45dd-908f-35d8bb716177/amrest-web-ordering/img/KFC/Web/kfc_pl/assets/uploads/bites_Big_menu.jpg');
        restaurant.addMenuItem('وجبة تويستر', 15, 'https://ocs-pl.oktawave.com/v1/AUTH_876e5729-f8dd-45dd-908f-35d8bb716177/amrest-web-ordering/img/KFC/Web/kfc_pl/assets/uploads/twister-menu.jpg');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */])('restaurant'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__models_restaurant__["a" /* Restaurant */])
    ], MenuListComponent.prototype, "restaurant", void 0);
    MenuListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'menu-list',template:/*ion-inline-start:"/Users/saudalhilali/Desktop/startUp/foodee/src/components/menu-list/menu-list.html"*/'<img [@fadeInOut] class="restaurantLogo" src="{{restaurant.logoImage}}" />\n<h3 text-center no-margin>مطعم {{restaurant.name}}</h3>\n<ion-grid>\n  <ion-row wrap style="text-align: -webkit-center;">\n    <ion-col *ngFor="let item of restaurant.menu">\n      <ion-card [@fadeInOut] class="menuItem sm-card" no-margin>\n        <div class="image-placeholder" [ngStyle]="{ \'background-image\': \'url(\'+item.image+\')\'}">\n        </div>\n        <ion-card-content>\n          <ion-card-title>\n            {{item.name}}\n          </ion-card-title>\n          <p class="price">\n            {{item.price}} ريال\n          </p>\n          <ion-row class="button-bar" wrap align-items-center justify-content-around>\n            <button color="smoke" ion-button icon-only small>\n              <ion-icon color="red" name="ios-settings"></ion-icon>\n            </button>\n            <button ion-button icon-only clear (click)="item.remove()">\n              <ion-icon color="red" name="remove"></ion-icon>\n            </button>\n            <p>{{item.quantitiy}}</p>\n            <button ion-button icon-only clear (click)="item.add()">\n              <ion-icon color="red" name="add"></ion-icon>\n            </button>\n          </ion-row>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n  <div class="bottom-btns">\n    <button ion-button color="red" block (click)="order(restaurant)">اطلب</button>\n    <button ion-button clear block icon-only (click)="loadMoreItems(restaurant)">\n      <ion-icon color="red" name="ios-arrow-down"></ion-icon>\n    </button>\n  </div>\n</ion-grid>'/*ion-inline-end:"/Users/saudalhilali/Desktop/startUp/foodee/src/components/menu-list/menu-list.html"*/,
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_24" /* trigger */])('fadeInOut', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* state */])('void', Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* style */])({ opacity: '0' })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* state */])('*', Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* style */])({ opacity: '1' })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* transition */])('void <=> *', Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* animate */])('300ms ease-in'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], MenuListComponent);
    return MenuListComponent;
}());

//# sourceMappingURL=menu-list.js.map

/***/ }),

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuItem; });
var MenuItem = /** @class */ (function () {
    function MenuItem(name, price, image) {
        this.name = name;
        this.price = price;
        this.quantitiy = 0;
        if (image != null)
            this.image = image;
    }
    MenuItem.prototype.add = function (num) {
        this.quantitiy += num;
    };
    MenuItem.prototype.set = function (num) {
        this.quantitiy = num;
    };
    MenuItem.prototype.remove = function () {
        if (this.quantitiy > 0)
            this.quantitiy--;
    };
    return MenuItem;
}());

//# sourceMappingURL=menuItem.js.map

/***/ }),

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestaurantsListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_restaurant__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
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
 * Generated class for the RestaurantsListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var RestaurantsListComponent = /** @class */ (function () {
    function RestaurantsListComponent() {
        console.log('Hello RestaurantsListComponent Component');
    }
    RestaurantsListComponent.prototype.generateMenue = function (restaurant) {
        restaurant.addMenuItem('وجبة تويستر', 15, 'https://ocs-pl.oktawave.com/v1/AUTH_876e5729-f8dd-45dd-908f-35d8bb716177/amrest-web-ordering/img/KFC/Web/kfc_pl/assets/uploads/twister-menu.jpg');
        restaurant.addMenuItem('وجبة مايتي زينجر', 20, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ39B3QamHch8oECAqWnQ2gx68UQfbX6kQmkOL-5C5YwkJ6vLtQ');
        restaurant.addMenuItem('وجبة كريسبي ستريبس', 19, 'https://ocs-pl.oktawave.com/v1/AUTH_876e5729-f8dd-45dd-908f-35d8bb716177/amrest-web-ordering/img/KFC/Web/kfc_pl/assets/uploads/strips-menu-1.jpg');
        restaurant.addMenuItem('وجبة مطافي', 18, 'https://ocs-pl.oktawave.com/v1/AUTH_876e5729-f8dd-45dd-908f-35d8bb716177/amrest-web-ordering/img/KFC/Web/kfc_pl/assets/uploads/longer-menu-1.jpg');
        this.restaurants.push(restaurant);
    };
    RestaurantsListComponent.prototype.loadMoreRestuarants = function () {
        this.generateMenue(new __WEBPACK_IMPORTED_MODULE_0__models_restaurant__["a" /* Restaurant */]('برقر كنق', 'الملك عبدالعزيز - النفل', 'برقر', 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Burger_King_Logo.svg/1000px-Burger_King_Logo.svg.png'));
        this.generateMenue(new __WEBPACK_IMPORTED_MODULE_0__models_restaurant__["a" /* Restaurant */]('البيك', 'الملك عبدالعزيز - النفل', 'بروستد', 'https://upload.wikimedia.org/wikipedia/ar/thumb/a/a1/Albaik_logo.svg/1200px-Albaik_logo.svg.png'));
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */])('restaurants'),
        __metadata("design:type", Array)
    ], RestaurantsListComponent.prototype, "restaurants", void 0);
    RestaurantsListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'restaurants-list',template:/*ion-inline-start:"/Users/saudalhilali/Desktop/startUp/foodee/src/components/restaurants-list/restaurants-list.html"*/'<!-- Generated template for the RestaurantsListComponent component -->\n<ion-grid>\n  <ion-row wrap style="text-align: -webkit-center;">\n    <ion-col *ngFor="let restaurant of restaurants">\n      <ion-card [@fadeInOut] class="menuItem sm-card smallCard" no-margin>\n        <div>\n          <img [@fadeInOut] class="restaurants-list-logo" src="{{restaurant.logoImage}}" />\n        </div>\n        <ion-card-content padding-horizontal>\n          <ion-card-title>\n            {{restaurant.name}}\n          </ion-card-title>\n          <p class="price">\n            {{restaurant.location}}\n          </p>\n\n          <button ion-button outline small block color="red" (click)="updateConversationWithRestaurant(restaurant)">اطلب</button>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n  <button ion-button clear block icon-only (click)="loadMoreRestuarants()">\n    <ion-icon color="red" name="ios-arrow-down"></ion-icon>\n  </button>\n</ion-grid>'/*ion-inline-end:"/Users/saudalhilali/Desktop/startUp/foodee/src/components/restaurants-list/restaurants-list.html"*/,
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_24" /* trigger */])('fadeInOut', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* state */])('void', Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* style */])({ opacity: '0' })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* state */])('*', Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* style */])({ opacity: '1' })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* transition */])('void <=> *', Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* animate */])('300ms ease-in'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], RestaurantsListComponent);
    return RestaurantsListComponent;
}());

//# sourceMappingURL=restaurants-list.js.map

/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_context__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_restaurant__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_message__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_conversation_service_conversation_service__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_suggestions_suggestions__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_speech_recognition__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_text_to_speech__ = __webpack_require__(249);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};









/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChatPage = /** @class */ (function () {
    function ChatPage(navCtrl, conversationService, speechRecognition, ngZone, tts) {
        this.navCtrl = navCtrl;
        this.conversationService = conversationService;
        this.speechRecognition = speechRecognition;
        this.ngZone = ngZone;
        this.tts = tts;
        this.message = "";
        this.recording = false;
        this.usingVoice = false;
        this.rest = [
            {
                'name': 'كنتاكي', 'location': 'الملك عبدالعزيز - النفل', 'type': 'برقر',
                'logoImage': 'https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png'
            },
            {
                'name': 'شاورمر', 'location': 'ابو بكر - الربيع', 'type': 'شاورما',
                'logoImage': 'https://upload.wikimedia.org/wikipedia/commons/6/64/Shawarmer_logo.jpg'
            },
            {
                'name': 'برقركنق', 'location': 'الملك عبدالعزيز - النخيل', 'type': 'برقر',
                'logoImage': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Burger_King_Logo.svg/1000px-Burger_King_Logo.svg.png'
            },
            {
                'name': 'البيك', 'location': 'تركي الاول - حطين', 'type': 'بروستد',
                'logoImage': 'https://upload.wikimedia.org/wikipedia/ar/thumb/a/a1/Albaik_logo.svg/1200px-Albaik_logo.svg.png'
            },
            {
                'name': 'بيت الشاورما', 'location': 'الملك عبدالعزيز - الخزامى', 'type': 'شاورما',
                'logoImage': 'https://d3k9gkh6dvavto.cloudfront.net/h/restaurants/logo_ars/000/004/091/0a780aa9b334f270e12a3f12cfea4132-original.jpg'
            }
        ];
        this.menus = [[
                { 'name': 'وجبة تويستر', 'price': 15, 'image': 'https://ocs-pl.oktawave.com/v1/AUTH_876e5729-f8dd-45dd-908f-35d8bb716177/amrest-web-ordering/img/KFC/Web/kfc_pl/assets/uploads/twister-menu.jpg' },
                { 'name': 'وجبة مايتي زينجر', 'price': 20, 'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ39B3QamHch8oECAqWnQ2gx68UQfbX6kQmkOL-5C5YwkJ6vLtQ' },
                { 'name': 'وجبة كريسبي ستريبس', 'price': 19, 'image': 'https://ocs-pl.oktawave.com/v1/AUTH_876e5729-f8dd-45dd-908f-35d8bb716177/amrest-web-ordering/img/KFC/Web/kfc_pl/assets/uploads/strips-menu-1.jpg' },
                { 'name': 'وجبة مطافي', 'price': 18, 'image': 'https://ocs-pl.oktawave.com/v1/AUTH_876e5729-f8dd-45dd-908f-35d8bb716177/amrest-web-ordering/img/KFC/Web/kfc_pl/assets/uploads/longer-menu-1.jpg' }
            ],
            [
                { 'name': 'وجبة ديو', 'price': 15, 'image': 'http://www.shawarmer.com//images/Content/Products/Duo.jpg' },
                { 'name': 'وجبة تنوري', 'price': 20, 'image': 'https://pbs.twimg.com/media/DOS4KaEW4AY89Bt.jpg' },
                { 'name': 'وجبة شطشويش', 'price': 19, 'image': 'http://www.shawarmer.com//images/Content/Products/Shatshaweesh.jpg' },
                { 'name': 'جمعات', 'price': 40, 'image': 'http://www.shawarmer.com//images/Content/Products/Gatherings.jpg' }
            ],
            [
                { 'name': 'وجبة وابر', 'price': 15, 'image': 'https://www.burgerking.delivery/storage/app/uploads/public/597/70b/f1f/x59770bf1f40cc722126399.png.pagespeed.ic.xu4DWti9sV.webp' },
                { 'name': 'وجبة دوبل وابر', 'price': 20, 'image': 'https://www.burgerking.delivery/storage/app/uploads/public/597/70d/07c/x59770d07c4fcc720357782.png.pagespeed.ic.o7BWGIJnWO.webp' },
                { 'name': 'وجبة تشيكن رويال', 'price': 19, 'image': 'https://www.burgerking.delivery/storage/app/uploads/public/597/70e/f05/x59770ef0528e0263459403.png.pagespeed.ic.fZ2QV-VNM6.webp' },
                { 'name': 'وجبة تشيكن وابر', 'price': 18, 'image': 'https://www.burgerking.delivery/storage/app/uploads/public/597/70f/687/x59770f6872fba728528016.png.pagespeed.ic.dxKvB-3gta.webp' }
            ],
            [
                { 'name': 'وجبة بروستد', 'price': 15, 'image': 'http://www.recipesaresimple.com/wp-content/uploads/2015/06/al-baik-style-broasted-chicken-recipe.jpg' },
                { 'name': 'وجبة مسحب', 'price': 20, 'image': 'http://www.dishocean.com/media/uploads/foods/chicken-crispy-qtr-broast-chest-al-shaikh-restaurant-gulshan-e-iqbal-karachi.jpg' },
                { 'name': 'وجبة العائلة', 'price': 49, 'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbuVLiU2aKG9VJLclvPTbef0eDVg1pkRslFOyBREUcN3zcKf718w' },
                { 'name': 'وجبة برقر بروستد', 'price': 18, 'image': 'http://albaikpizza.com.au/images/burger_zinger_menu.jpg' }
            ],
            [
                { 'name': 'شاورما عربي', 'price': 15, 'image': 'http://www.shawarmer.com//images/Content/Products/Duo.jpg' },
                { 'name': 'شاورما', 'price': 20, 'image': 'https://pbs.twimg.com/media/DOS4KaEW4AY89Bt.jpg' },
                { 'name': 'صحن شاورما', 'price': 19, 'image': 'http://www.shawarmer.com//images/Content/Products/Shatshaweesh.jpg' },
                { 'name': 'شيش طاووق', 'price': 40, 'image': 'http://www.shawarmer.com//images/Content/Products/Gatherings.jpg' }
            ]];
        this.messages = new Array();
        this.restaurants = new Array();
        this.origRestaurants = new Array();
        this.context = new __WEBPACK_IMPORTED_MODULE_0__models_context__["a" /* Context */]();
    }
    ChatPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.conversationService.sendMessage("").subscribe(function (data) {
            console.log(data);
            _this.updateConversation(data);
        }, function (error) {
            console.log(error);
        });
        this.loadRestuarants();
    };
    ChatPage.prototype.initMap = function () {
        var posRiyadh = { lat: 24.713552, lng: 46.675296 };
        this.map = new google.maps.Map(this.mapElement.nativeElement, {
            zoom: 6,
            center: posRiyadh,
            mapTypeId: 'roadmap',
            streetViewControl: false,
            fullscreenControl: false,
            mapTypeControl: false
        });
        this.map.setCenter(posRiyadh);
        this.getMyLocation();
        var vis = this;
        google.maps.event.addListener(this.map, "click", function (event) {
            if (this.marker)
                this.marker.setMap(null);
            var infoWindow = new google.maps.InfoWindow({ map: vis.map });
            this.marker = new google.maps.Marker({
                position: event.latLng,
                map: vis.map,
                draggable: true,
                title: "Drag me!"
            });
            vis.map.setCenter(event.latLng);
            vis.map.setZoom(15);
        });
    };
    ChatPage.prototype.getMyLocation = function () {
        var _this = this;
        var infoWindow = new google.maps.InfoWindow({ map: this.map });
        // Try HTML5 geolocation.
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                console.log(pos);
                // infoWindow.setPosition(pos);
                // infoWindow.setContent('My location');
                _this.marker = new google.maps.Marker({
                    position: pos,
                    map: _this.map
                });
                _this.map.setCenter(pos);
                _this.map.setZoom(15);
            }, function () {
                _this.handleLocationError(true, infoWindow, _this.map.getCenter());
            });
        }
        else {
            // Browser doesn't support Geolocation
            this.handleLocationError(false, infoWindow, this.map.getCenter());
        }
    };
    ChatPage.prototype.handleLocationError = function (browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        console.log(browserHasGeolocation ?
            'Error: The Geolocation service failed.' :
            'Error: Your browser doesn\'t support geolocation.');
    };
    ChatPage.prototype.loadRestuarants = function () {
        var _this = this;
        this.rest.forEach(function (res, index) {
            var ress = res;
            var restaurant = new __WEBPACK_IMPORTED_MODULE_1__models_restaurant__["a" /* Restaurant */](ress.name, ress.type, ress.location, ress.logoImage);
            var menu = _this.menus[index];
            restaurant.addMenu(menu);
            _this.restaurants.push(restaurant);
            _this.origRestaurants.push(restaurant);
        });
    };
    ChatPage.prototype.generateMenue = function (restaurant) {
        restaurant.addMenuItem('وجبة تويستر', 15, 'https://ocs-pl.oktawave.com/v1/AUTH_876e5729-f8dd-45dd-908f-35d8bb716177/amrest-web-ordering/img/KFC/Web/kfc_pl/assets/uploads/twister-menu.jpg');
        restaurant.addMenuItem('وجبة مايتي زينجر', 20, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ39B3QamHch8oECAqWnQ2gx68UQfbX6kQmkOL-5C5YwkJ6vLtQ');
        restaurant.addMenuItem('وجبة كريسبي ستريبس', 19, 'https://ocs-pl.oktawave.com/v1/AUTH_876e5729-f8dd-45dd-908f-35d8bb716177/amrest-web-ordering/img/KFC/Web/kfc_pl/assets/uploads/strips-menu-1.jpg');
        restaurant.addMenuItem('وجبة مطافي', 18, 'https://ocs-pl.oktawave.com/v1/AUTH_876e5729-f8dd-45dd-908f-35d8bb716177/amrest-web-ordering/img/KFC/Web/kfc_pl/assets/uploads/longer-menu-1.jpg');
        this.restaurants.push(restaurant);
    };
    ChatPage.prototype.controlSuggestions = function () {
        this.suggestions.state == '*' ? this.suggestions.showSuggestions() : this.suggestions.hideSuggestions();
    };
    ChatPage.prototype.loadMoreItems = function (restaurant) {
        restaurant.addMenuItem('وجبة دينر', 16, 'https://ocs-pl.oktawave.com/v1/AUTH_876e5729-f8dd-45dd-908f-35d8bb716177/amrest-web-ordering/img/KFC/Web/kfc_pl/assets/uploads/bites_Big_menu.jpg');
        restaurant.addMenuItem('وجبة تويستر', 15, 'https://ocs-pl.oktawave.com/v1/AUTH_876e5729-f8dd-45dd-908f-35d8bb716177/amrest-web-ordering/img/KFC/Web/kfc_pl/assets/uploads/twister-menu.jpg');
    };
    ChatPage.prototype.loadMoreRestuarants = function () {
        this.generateMenue(new __WEBPACK_IMPORTED_MODULE_1__models_restaurant__["a" /* Restaurant */]('برقر كنق', 'الملك عبدالعزيز - النفل', 'برقر', 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Burger_King_Logo.svg/1000px-Burger_King_Logo.svg.png'));
        this.generateMenue(new __WEBPACK_IMPORTED_MODULE_1__models_restaurant__["a" /* Restaurant */]('البيك', 'الملك عبدالعزيز - النفل', 'بروستد', 'https://upload.wikimedia.org/wikipedia/ar/thumb/a/a1/Albaik_logo.svg/1200px-Albaik_logo.svg.png'));
    };
    ChatPage.prototype.send = function (msg) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var message, contextPayload;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        message = this.message;
                        if (msg != null)
                            message = msg;
                        if (message == null || message.length == 0)
                            return [2 /*return*/];
                        this.suggestions.hideSuggestions();
                        this.messages.push(new __WEBPACK_IMPORTED_MODULE_2__models_message__["a" /* Message */](message, false));
                        setTimeout(function () {
                            _this.content.scrollToBottom(200);
                        });
                        return [4 /*yield*/, this.context.getPayload()];
                    case 1:
                        contextPayload = _a.sent();
                        this.conversationService.sendMessage(message, contextPayload).subscribe(function (data) {
                            console.log(data);
                            var restaurantIndex = data.entities.findIndex(function (k) { return k.entity == 'مطعم'; });
                            var cuisineIndex = data.entities.findIndex(function (k) { return k.entity == 'كوزين'; });
                            var orderStatusIntent = data.intents.findIndex(function (k) { return k.intent == 'حالة_الطلب'; });
                            var sentOrder = data.intents.findIndex(function (k) { return k.intent == 'جاهز'; });
                            var menuIntent = data.intents.findIndex(function (k) { return k.intent == 'منيو'; });
                            var fullOrder = data.intents.findIndex(function (k) { return k.intent == 'طلب_كامل'; });
                            var availRestaurantsIntent = data.intents.findIndex(function (k) { return k.intent == 'مطاعم_متوفره'; });
                            var somethingElse = data.output.nodes_visited.findIndex(function (k) { return k == 'أي شيء آخر'; });
                            var name = data.context.name;
                            if (name)
                                _this.context.name = name;
                            if (_this.usingVoice) {
                                _this.speak(data.output.text[0]);
                            }
                            if (somethingElse >= 0) {
                                _this.updateConversation(data);
                                _this.controlSuggestions();
                                // setTimeout(() => {
                                //   this.suggestions.showSuggestions();
                                // }, 2000)
                            }
                            else if (fullOrder >= 0) {
                                console.log("full order");
                                _this.findRestaurant(data.entities[restaurantIndex].value).then(function (res) {
                                    if (res != null) {
                                        _this.conversationService.processFullOrder(data, res).then(function (data) {
                                            console.log(data);
                                            _this.order(data);
                                        }).catch(function (err) {
                                            console.log(err);
                                            _this.updateConversation({ output: { text: ["للأسف الطلب هذا مو موجود عندنا لسى"] } });
                                        });
                                    }
                                    else {
                                        _this.updateConversation({ output: { text: ["للأسف المطعم مو موجود عندنا لسى"] } });
                                    }
                                });
                            }
                            else if (restaurantIndex >= 0 && menuIntent >= 0) {
                                _this.findRestaurant(data.entities[restaurantIndex].value).then(function (res) {
                                    if (res != null)
                                        _this.updateConversationWithRestaurant(res);
                                }).then(function (_) {
                                    _this.updateConversation(data);
                                }).catch(function (err) {
                                    _this.updateConversation(data);
                                });
                            }
                            else if (cuisineIndex >= 0) {
                                _this.restaurants = _this.origRestaurants.filter(function (res) { return res.type === data.entities[cuisineIndex].value; });
                                _this.listAvailableRestaurants().then(function (_) {
                                    _this.updateConversation(data);
                                });
                            }
                            else if (availRestaurantsIntent >= 0) {
                                _this.restaurants = _this.origRestaurants;
                                _this.listAvailableRestaurants().then(function (_) {
                                    _this.updateConversation(data);
                                });
                            }
                            else if (orderStatusIntent >= 0 && data.context.order_status == 'true') {
                                _this.showOrderStatus().then(function (_) {
                                    _this.updateConversation(data);
                                });
                            }
                            else {
                                _this.updateConversation(data);
                            }
                        }, function (error) {
                            console.log(error);
                        });
                        this.message = "";
                        return [2 /*return*/];
                }
            });
        });
    };
    ChatPage.prototype.findRestaurant = function (name) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.restaurants = _this.origRestaurants;
            _this.restaurants.forEach(function (res, index) {
                if (res.name === name) {
                    var restaurant = res;
                    // this.updateConversationWithRestaurant(restaurant);
                    resolve(res);
                }
                if (index == _this.restaurants.length - 1) {
                    reject(null);
                }
            });
        });
    };
    ChatPage.prototype.listAvailableRestaurants = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var msg = new __WEBPACK_IMPORTED_MODULE_2__models_message__["a" /* Message */]("", true, 'restaurants-list');
            _this.messages.push(msg);
            resolve(null);
        });
    };
    ChatPage.prototype.showOrderStatus = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var msg = new __WEBPACK_IMPORTED_MODULE_2__models_message__["a" /* Message */]("", true, 'order_status');
            _this.messages.push(msg);
            resolve(null);
        });
    };
    ChatPage.prototype.updateConversationWithRestaurant = function (restaurant) {
        var _this = this;
        var msg = new __WEBPACK_IMPORTED_MODULE_2__models_message__["a" /* Message */]("", true, 'menu');
        msg.setRestaurant(restaurant);
        this.messages.push(msg);
        setTimeout(function () {
            _this.content.scrollToBottom(500);
        }, 100);
    };
    ChatPage.prototype.order = function (restaurant) {
        var _this = this;
        var msg = new __WEBPACK_IMPORTED_MODULE_2__models_message__["a" /* Message */]("", true, 'receipt');
        restaurant.setTotal().then(function (res) {
            if (res > 0) {
                msg.setRestaurant(restaurant);
                _this.messages.push(msg);
                // setTimeout(_ => {
                //   this.initMap();
                // }, 800)
            }
            else {
                _this.messages.push(new __WEBPACK_IMPORTED_MODULE_2__models_message__["a" /* Message */]("لو سمحت اضف اشياء الي السلة 👀", true));
            }
        });
        setTimeout(function () {
            _this.content.scrollToBottom(500);
        });
    };
    ChatPage.prototype.sendOrder = function (type, restaurant) {
        var _this = this;
        this.context.order_stats = 'true';
        this.conversationService.sendMessage("ارسل").subscribe(function (data) {
            console.log(data);
            _this.updateConversation(data);
            _this.suggestions.displaySuggestion('وش صار على الطلب؟');
        }, function (error) {
            console.log(error);
        });
    };
    ChatPage.prototype.pay = function (restaurant) {
        var _this = this;
        var msg = new __WEBPACK_IMPORTED_MODULE_2__models_message__["a" /* Message */]("", true, 'payment');
        msg.setRestaurant(restaurant);
        this.messages.push(msg);
        setTimeout(function () {
            _this.content.scrollToBottom(500);
        }, 100);
    };
    ChatPage.prototype.updateConversation = function (data) {
        var _this = this;
        var msg = "";
        if (data.output.text.length >= 1) {
            msg = data.output.text.join(" ");
        }
        else if (data.output.text.length == 1) {
            msg = data.output.text[0];
        }
        this.messages.push(new __WEBPACK_IMPORTED_MODULE_2__models_message__["a" /* Message */](msg, true));
        setTimeout(function () {
            _this.content.scrollToBottom(100);
        });
        setTimeout(function () {
            if (_this.usingVoice)
                _this.listenForSpeach();
        }, 3000);
    };
    ChatPage.prototype.pickSuggestion = function (suggestion) {
        var _this = this;
        this.send(suggestion);
        setTimeout(function () {
            _this.suggestions.hideSuggestions();
        }, 400);
        if (this.recording) {
            this.speechRecognition.stopListening();
            this.recording = false;
        }
    };
    ChatPage.prototype.footerTouchStart = function (event) {
        var _this = this;
        if (event.target.localName !== "input") {
            event.preventDefault();
        }
        else {
            setTimeout(function () {
                _this.content.scrollToBottom();
            }, 300);
        }
    };
    ChatPage.prototype.touchSendButton = function (event) {
        event.preventDefault();
        this.send();
    };
    ChatPage.prototype.getPermission = function () {
        return __awaiter(this, void 0, void 0, function () {
            var permission, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.speechRecognition.requestPermission()];
                    case 1:
                        permission = _a.sent();
                        console.log(permission);
                        return [2 /*return*/, permission];
                    case 2:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ChatPage.prototype.hasPermission = function () {
        return __awaiter(this, void 0, void 0, function () {
            var permission, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.speechRecognition.hasPermission()];
                    case 1:
                        permission = _a.sent();
                        console.log(permission);
                        return [2 /*return*/, permission];
                    case 2:
                        e_2 = _a.sent();
                        console.error(e_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ChatPage.prototype.listenForSpeach = function () {
        var _this = this;
        var text = '';
        this.usingVoice = true;
        var options = {
            language: 'ar-SA',
            showPartial: true
        };
        console.log("startedd listenling..");
        this.recording = true;
        this.speechRecognition.startListening(options)
            .subscribe(function (matches) {
            _this.ngZone.run(function () {
                text = matches[0];
                console.log(text);
                // this.message = matches[0];
                _this.suggestions.displaySuggestion(text);
            });
        }, function (onerror) {
            _this.speechRecognition.stopListening();
            _this.recording = false;
            console.log('error:', onerror);
        }, function () {
            _this.speechRecognition.stopListening();
            _this.recording = false;
        });
        setTimeout(function () {
            if (text.length > 0) {
                _this.pickSuggestion(text);
            }
        }, 5000);
    };
    ChatPage.prototype.touchSpeakButton = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var permission;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.recording) return [3 /*break*/, 1];
                        this.speechRecognition.stopListening();
                        this.recording = false;
                        this.usingVoice = false;
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.hasPermission()];
                    case 2:
                        permission = _a.sent();
                        console.log(permission);
                        if (permission) {
                            this.listenForSpeach();
                        }
                        else {
                            this.getPermission();
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ChatPage.prototype.speak = function (text) {
        this.tts.speak({
            text: text,
            locale: 'ar-SA',
            rate: 1.65
        })
            .then(function () { return console.log('Success'); })
            .catch(function (reason) { return console.log(reason); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* Content */])
    ], ChatPage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["_9" /* ViewChild */])('suggestions'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6__components_suggestions_suggestions__["a" /* SuggestionsComponent */])
    ], ChatPage.prototype, "suggestions", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["_9" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__angular_core__["u" /* ElementRef */])
    ], ChatPage.prototype, "mapElement", void 0);
    ChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["n" /* Component */])({
            selector: 'page-chat',template:/*ion-inline-start:"/Users/saudalhilali/Desktop/startUp/foodee/src/pages/chat/chat.html"*/'<!--\n  Generated template for the ChatPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="gold">\n    <ion-buttons end>\n      <button ion-button icon-only (click)="controlSuggestions()">\n        <ion-icon color="red" name="ios-information-circle-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>\n      <img class="title-image" src="https://pizza-t.net/assets/front/food_oddappz/images/food_oddappz.png?1522516070" height="40"\n        alt="">\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="chat" padding-bottom padding-bottom>\n  <div class="chat-content">\n    <div class="message" *ngFor="let msg of messages">\n      <div *ngIf="msg.type === \'regular\'" [attr.class]="msg.isWatson ? \'fromThem\' : \'myMessage\'">\n        <p>{{msg.content}}</p>\n        <p class="date">{{msg.timestamp}}</p>\n      </div>\n      <div class="fromThem nohover restaurant" *ngIf="msg.type === \'menu\'">\n        <img [@fadeInOut] class="restaurantLogo" src="{{msg.restaurant.logoImage}}" />\n        <h3 text-center no-margin>مطعم {{msg.restaurant.name}}</h3>\n        <ion-grid>\n          <ion-row wrap style="text-align: -webkit-center;">\n            <ion-col *ngFor="let item of msg.restaurant.menu">\n              <ion-card [@fadeInOut] class="fancy-card sm-card" no-margin>\n                <div class="image-placeholder" [ngStyle]="{ \'background-image\': \'url(\'+item.image+\')\'}">\n                </div>\n                <ion-card-content>\n                  <ion-card-title>\n                    {{item.name}}\n                  </ion-card-title>\n                  <p class="price" dir="rtl">\n                    {{item.price}} ريال\n                  </p>\n                  <ion-row class="button-bar" wrap align-items-center justify-content-around>\n                    <button color="smoke" ion-button icon-only small>\n                      <ion-icon color="red" name="ios-settings"></ion-icon>\n                    </button>\n                    <button ion-button icon-only clear (click)="item.remove()">\n                      <ion-icon color="red" name="remove"></ion-icon>\n                    </button>\n                    <p>{{item.quantitiy}}</p>\n                    <button ion-button icon-only clear (click)="item.add(1)">\n                      <ion-icon color="red" name="add"></ion-icon>\n                    </button>\n                  </ion-row>\n                </ion-card-content>\n              </ion-card>\n            </ion-col>\n          </ion-row>\n          <div class="bottom-btns">\n            <button ion-button color="red" block (click)="order(msg.restaurant)">اطلب</button>\n            <button ion-button clear block icon-only (click)="loadMoreItems(msg.restaurant)">\n              <ion-icon color="red" name="ios-arrow-down"></ion-icon>\n            </button>\n          </div>\n        </ion-grid>\n      </div>\n      <div class="fromThem nohover restaurant" *ngIf="msg.type === \'restaurants-list\'">\n        <ion-grid>\n          <ion-row wrap *ngFor="let restaurant of restaurants">\n            <!-- <ion-col *ngFor="let restaurant of restaurants"> -->\n\n            <ion-card [@fadeInOut] class="fancy-card restaurants-list" no-margin>\n              <ion-item>\n                <ion-avatar item-start>\n                  <img [@fadeInOut] class="restaurants-list-logo" src="{{restaurant.logoImage}}" />\n                </ion-avatar>\n                <h2> {{restaurant.name}}</h2>\n                <p>{{restaurant.location}}</p>\n              </ion-item>\n              <div>\n              </div>\n              <ion-row>\n                <ion-col>\n                  <button ion-button clear small>\n                    <rating [(ngModel)]="restaurant.rate" value="3" nullable="true">\n                    </rating>\n                  </button>\n                </ion-col>\n                <ion-col center text-center>\n                  <button ion-button clear small color="red" (click)="updateConversationWithRestaurant(restaurant)">اطلب</button>\n                </ion-col>\n                <ion-col center text-center>\n                  <p>توصيل</p>\n                  <!-- <br> -->\n                  <p>\n                    ٣٠ دقيقة\n                  </p>\n                </ion-col>\n              </ion-row>\n              <hr>\n            </ion-card>\n            <!-- </ion-col> -->\n          </ion-row>\n          <button ion-button clear block icon-only (click)="loadMoreRestuarants()">\n            <ion-icon color="red" name="ios-arrow-down"></ion-icon>\n          </button>\n        </ion-grid>\n      </div>\n      <div class="fromThem nohover restaurant" *ngIf="msg.type === \'receipt\'">\n        <ion-card class="receipt fancy-card">\n          <ion-card-header class="receipt-header" text-center>\n            ملخص الطلب من\n            <span style="color: #e30000">{{msg.restaurant.name}}</span>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-list>\n              <span *ngFor="let item of msg.restaurant.menu">\n                <ion-item *ngIf="item.quantitiy > 0">\n                  <ion-avatar item-start>\n                    <img src="{{item.image}}">\n                  </ion-avatar>\n                  <ion-row justify-content-between>\n                    <h2>{{item.name}}</h2>\n                    <h2 class="red">x {{item.quantitiy}}</h2>\n                  </ion-row>\n                  <p>\n                    {{item.price}} ريال\n                  </p>\n                </ion-item>\n              </span>\n              <ion-item item-start>\n                <h3 dir="rtl">الاجمالي</h3>\n                <h3 dir="rtl" class="red">{{msg.restaurant.total}} ريال</h3>\n              </ion-item>\n            </ion-list>\n          </ion-card-content>\n\n        </ion-card>\n\n        <!-- <ion-card class="receipt fancy-card">\n          <ion-card-header class="receipt-header" text-center>\n            موقع التوصيل\n          </ion-card-header>\n          <ion-card-content>\n            <div #map id="map"></div>\n          </ion-card-content>\n\n        </ion-card> -->\n        <div class="bottom-btns">\n          <button ion-button color="red" block (click)="pay(msg.restaurant)">ادفع</button>\n          <button ion-button color="red" block outline (click)="updateConversationWithRestaurant(msg.restaurant)">تعديل</button>\n        </div>\n      </div>\n      <div class="fromThem nohover restaurant" *ngIf="msg.type === \'payment\'">\n        <payment (notify)=\'sendOrder($event, msg.restaurant)\'></payment>\n      </div>\n      <div class="fromThem nohover restaurant" *ngIf="msg.type === \'order_status\'">\n        <order-status></order-status>\n      </div>\n    </div>\n  </div>\n</ion-content>\n<suggestions #suggestions (notify)=\'pickSuggestion($event)\'></suggestions>\n<ion-footer (touchstart)="footerTouchStart($event)">\n  <ion-toolbar class="bottom-bar">\n    <ion-buttons left>\n      <ion-row wrap>\n        <button ion-button icon-only clear color="red" (touchstart)="touchSendButton($event);" [disabled]="message == \'\'">\n          <ion-icon name="send"></ion-icon>\n        </button>\n        <button ion-button icon-only clear [ngStyle]="{\'color\': recording ? \'#e30000\' : \'#f7c74d\'}" (touchstart)="touchSpeakButton($event);">\n          <ion-icon name="ios-mic"></ion-icon>\n        </button>\n      </ion-row>\n\n    </ion-buttons>\n    <form>\n      <ion-input class="message" type="text" placeholder="ادخل رسالتك.." [(ngModel)]="message" (keyup.enter)="send();" name="message"></ion-input>\n    </form>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/saudalhilali/Desktop/startUp/foodee/src/pages/chat/chat.html"*/,
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["_24" /* trigger */])('fadeInOut', [
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["_21" /* state */])('void', Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["_22" /* style */])({ opacity: '0' })),
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["_21" /* state */])('*', Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["_22" /* style */])({ opacity: '1' })),
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["_23" /* transition */])('void <=> *', Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["_14" /* animate */])('300ms ease-in'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_conversation_service_conversation_service__["a" /* ConversationServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_speech_recognition__["a" /* SpeechRecognition */],
            __WEBPACK_IMPORTED_MODULE_5__angular_core__["N" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_text_to_speech__["a" /* TextToSpeech */]])
    ], ChatPage);
    return ChatPage;
}());

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Context; });
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Context = /** @class */ (function () {
    function Context() {
    }
    Context.prototype.getPayload = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        resolve({ 'name': _this.name, 'order_status': _this.order_stats });
                    })];
            });
        });
    };
    return Context;
}());

//# sourceMappingURL=context.js.map

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Message; });
var Message = /** @class */ (function () {
    function Message(content, isWatson, type) {
        this.content = content;
        this.isWatson = isWatson;
        var date = new Date();
        this.timestamp = date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
        if (type != null) {
            this.type = type;
        }
        else
            this.type = 'regular';
    }
    Message.prototype.setRestaurant = function (restaurant) {
        this.restaurant = restaurant;
    };
    return Message;
}());

//# sourceMappingURL=message.js.map

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic2_rating_module__ = __webpack_require__(430);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__ionic2_rating_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic2_rating__ = __webpack_require__(419);
/* unused harmony reexport Ionic2Rating */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ionic2RatingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic2_rating__ = __webpack_require__(419);




var Ionic2RatingModule = (function () {
    function Ionic2RatingModule() {
    }
    Ionic2RatingModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */], args: [{
                    declarations: [
                        __WEBPACK_IMPORTED_MODULE_3__ionic2_rating__["a" /* Ionic2Rating */]
                    ],
                    exports: [
                        __WEBPACK_IMPORTED_MODULE_3__ionic2_rating__["a" /* Ionic2Rating */]
                    ],
                    imports: [
                        __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */]
                    ],
                    schemas: [
                        __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]
                    ]
                },] },
    ];
    /** @nocollapse */
    Ionic2RatingModule.ctorParameters = [];
    return Ionic2RatingModule;
}());
//# sourceMappingURL=ionic2-rating.module.js.map

/***/ })

});
//# sourceMappingURL=0.js.map