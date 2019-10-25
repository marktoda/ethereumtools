(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/rxjs-compat/_esm5/BehaviorSubject.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/BehaviorSubject.js ***!
  \***********************************************************/
/*! exports provided: BehaviorSubject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BehaviorSubject", function() { return rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]; });


//# sourceMappingURL=BehaviorSubject.js.map

/***/ }),

/***/ "./src/app/pipes/pipes.module.ts":
/*!***************************************!*\
  !*** ./src/app/pipes/pipes.module.ts ***!
  \***************************************/
/*! exports provided: PipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony import */ var _titleCase_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./titleCase.pipe */ "./src/app/pipes/titleCase.pipe.ts");
/* harmony import */ var _truncate_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./truncate.pipe */ "./src/app/pipes/truncate.pipe.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
// other imports



var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
            // dep modules
            ],
            declarations: [
                _titleCase_pipe__WEBPACK_IMPORTED_MODULE_0__["TitleCasePipe"],
                _truncate_pipe__WEBPACK_IMPORTED_MODULE_1__["TruncatePipe"],
            ],
            exports: [
                _titleCase_pipe__WEBPACK_IMPORTED_MODULE_0__["TitleCasePipe"],
                _truncate_pipe__WEBPACK_IMPORTED_MODULE_1__["TruncatePipe"],
            ]
        })
    ], PipesModule);
    return PipesModule;
}());



/***/ }),

/***/ "./src/app/pipes/titleCase.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/pipes/titleCase.pipe.ts ***!
  \*****************************************/
/*! exports provided: TitleCasePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleCasePipe", function() { return TitleCasePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
// capitalize.pipe.ts
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var TitleCasePipe = /** @class */ (function () {
    function TitleCasePipe() {
    }
    TitleCasePipe.prototype.transform = function (value, args) {
        if (!value)
            return value;
        return value.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    };
    TitleCasePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'capitalize' })
    ], TitleCasePipe);
    return TitleCasePipe;
}());



/***/ }),

/***/ "./src/app/pipes/truncate.pipe.ts":
/*!****************************************!*\
  !*** ./src/app/pipes/truncate.pipe.ts ***!
  \****************************************/
/*! exports provided: TruncatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruncatePipe", function() { return TruncatePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var TruncatePipe = /** @class */ (function () {
    function TruncatePipe() {
    }
    TruncatePipe.prototype.transform = function (value, limit, completeWords, ellipsis) {
        if (limit === void 0) { limit = 100; }
        if (completeWords === void 0) { completeWords = false; }
        if (ellipsis === void 0) { ellipsis = '...'; }
        if (completeWords) {
            limit = value.substr(0, limit).lastIndexOf(' ');
            if (limit == -1) {
                limit = value.length;
            }
        }
        if (value.length > limit) {
            return "" + value.substr(0, limit) + ellipsis;
        }
        else {
            return value;
        }
    };
    TruncatePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'truncate'
        })
    ], TruncatePipe);
    return TruncatePipe;
}());



/***/ }),

/***/ "./src/app/services/tool.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/tool.service.ts ***!
  \******************************************/
/*! exports provided: ToolService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolService", function() { return ToolService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/BehaviorSubject */ "./node_modules/rxjs-compat/_esm5/BehaviorSubject.js");
/* harmony import */ var _shared_util_available_tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/util/available-tools */ "./src/app/shared/util/available-tools.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var ToolService = /** @class */ (function () {
    // Using Angular DI we use the HTTP service
    function ToolService() {
        this.dataStore = {
            items: [],
            categories: new Set(),
        };
        this._items = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this._categories = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](new Set());
    }
    ToolService.prototype.connect = function (collectionViewer) {
        return this._items.asObservable();
    };
    ToolService.prototype.disconnect = function (collectionViewer) {
        this._items.complete();
    };
    Object.defineProperty(ToolService.prototype, "items", {
        get: function () {
            return this._items.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ToolService.prototype, "categories", {
        get: function () {
            return this._categories.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    ToolService.prototype.load = function (query, category) {
        var newItems = [];
        var categories = new Set();
        _shared_util_available_tools__WEBPACK_IMPORTED_MODULE_2__["default"].forEach(function (tool) {
            newItems.push(tool);
            categories.add(tool.category);
        });
        this.dataStore.items = newItems;
        this._items.next(Object.assign({}, this.dataStore).items);
        this.dataStore.categories = categories;
        this._categories.next(Object.assign({}, this.dataStore).categories);
    };
    ToolService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ToolService);
    return ToolService;
}());



/***/ }),

/***/ "./src/app/shared/util/available-tools.ts":
/*!************************************************!*\
  !*** ./src/app/shared/util/available-tools.ts ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var result = [
    {
        name: 'keccak256',
        category: 'crypto'
    },
    {
        name: 'broadcast transaction',
        category: 'rpc'
    },
    {
        name: 'decode transaction',
        category: 'crypto'
    },
    {
        name: 'verify transaction',
        category: 'crypto'
    }
];
/* harmony default export */ __webpack_exports__["default"] = (result);


/***/ })

}]);
//# sourceMappingURL=common.js.map