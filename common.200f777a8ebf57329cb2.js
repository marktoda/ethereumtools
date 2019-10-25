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
var PipesModule = /** @class */ /*@__PURE__*/ (function () {
    function PipesModule() {
    }
    return PipesModule;
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
/* harmony import */ var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/BehaviorSubject */ "./node_modules/rxjs-compat/_esm5/BehaviorSubject.js");
/* harmony import */ var _shared_util_available_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/util/available-tools */ "./src/app/shared/util/available-tools.ts");


var ToolService = /** @class */ (function () {
    // Using Angular DI we use the HTTP service
    function ToolService() {
        this.dataStore = {
            items: [],
            categories: new Set(),
        };
        this._items = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
        this._categories = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](new Set());
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
        _shared_util_available_tools__WEBPACK_IMPORTED_MODULE_1__["default"].forEach(function (tool) {
            newItems.push(tool);
            categories.add(tool.category);
        });
        this.dataStore.items = newItems;
        this._items.next(Object.assign({}, this.dataStore).items);
        this.dataStore.categories = categories;
        this._categories.next(Object.assign({}, this.dataStore).categories);
    };
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