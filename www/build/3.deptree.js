webpackJsonp([3],{

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageModuleNgFactory", function() { return MenuPageModuleNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__menu_module__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_module__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__node_modules_ionic_angular_components_action_sheet_action_sheet_component_ngfactory__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__node_modules_ionic_angular_components_alert_alert_component_ngfactory__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__node_modules_ionic_angular_components_app_app_root_ngfactory__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__node_modules_ionic_angular_components_loading_loading_component_ngfactory__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__node_modules_ionic_angular_components_modal_modal_component_ngfactory__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__node_modules_ionic_angular_components_picker_picker_component_ngfactory__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__node_modules_ionic_angular_components_popover_popover_component_ngfactory__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__node_modules_ionic_angular_components_select_select_popover_component_ngfactory__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__node_modules_ionic_angular_components_toast_toast_component_ngfactory__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__menu_ngfactory__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__menu__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ionic_angular_util_module_loader__ = __webpack_require__(35);
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

















var MenuPageModuleInjector = (function (_super) {
    __extends(MenuPageModuleInjector, _super);
    function MenuPageModuleInjector(parent) {
        return _super.call(this, parent, [
            __WEBPACK_IMPORTED_MODULE_5__node_modules_ionic_angular_components_action_sheet_action_sheet_component_ngfactory__["a" /* ActionSheetCmpNgFactory */],
            __WEBPACK_IMPORTED_MODULE_6__node_modules_ionic_angular_components_alert_alert_component_ngfactory__["a" /* AlertCmpNgFactory */],
            __WEBPACK_IMPORTED_MODULE_7__node_modules_ionic_angular_components_app_app_root_ngfactory__["a" /* IonicAppNgFactory */],
            __WEBPACK_IMPORTED_MODULE_8__node_modules_ionic_angular_components_loading_loading_component_ngfactory__["a" /* LoadingCmpNgFactory */],
            __WEBPACK_IMPORTED_MODULE_9__node_modules_ionic_angular_components_modal_modal_component_ngfactory__["a" /* ModalCmpNgFactory */],
            __WEBPACK_IMPORTED_MODULE_10__node_modules_ionic_angular_components_picker_picker_component_ngfactory__["a" /* PickerCmpNgFactory */],
            __WEBPACK_IMPORTED_MODULE_11__node_modules_ionic_angular_components_popover_popover_component_ngfactory__["a" /* PopoverCmpNgFactory */],
            __WEBPACK_IMPORTED_MODULE_12__node_modules_ionic_angular_components_select_select_popover_component_ngfactory__["a" /* SelectPopoverNgFactory */],
            __WEBPACK_IMPORTED_MODULE_13__node_modules_ionic_angular_components_toast_toast_component_ngfactory__["a" /* ToastCmpNgFactory */],
            __WEBPACK_IMPORTED_MODULE_14__menu_ngfactory__["a" /* MenuPageNgFactory */]
        ], []) || this;
    }
    Object.defineProperty(MenuPageModuleInjector.prototype, "_NgLocalization_7", {
        get: function () {
            if ((this.__NgLocalization_7 == null)) {
                (this.__NgLocalization_7 = new __WEBPACK_IMPORTED_MODULE_2__angular_common__["i" /* NgLocaleLocalization */](this.parent.get(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* LOCALE_ID */])));
            }
            return this.__NgLocalization_7;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MenuPageModuleInjector.prototype, "_\u0275i_8", {
        get: function () {
            if ((this.__ɵi_8 == null)) {
                (this.__ɵi_8 = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["m" /* ɵi */]());
            }
            return this.__ɵi_8;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MenuPageModuleInjector.prototype, "_FormBuilder_9", {
        get: function () {
            if ((this.__FormBuilder_9 == null)) {
                (this.__FormBuilder_9 = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormBuilder */]());
            }
            return this.__FormBuilder_9;
        },
        enumerable: true,
        configurable: true
    });
    MenuPageModuleInjector.prototype.createInternal = function () {
        this._CommonModule_0 = new __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */]();
        this._ɵba_1 = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["l" /* ɵba */]();
        this._FormsModule_2 = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* FormsModule */]();
        this._ReactiveFormsModule_3 = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* ReactiveFormsModule */]();
        this._IonicModule_4 = new __WEBPACK_IMPORTED_MODULE_4_ionic_angular_module__["a" /* IonicModule */]();
        this._IonicPageModule_5 = new __WEBPACK_IMPORTED_MODULE_4_ionic_angular_module__["b" /* IonicPageModule */]();
        this._MenuPageModule_6 = new __WEBPACK_IMPORTED_MODULE_1__menu_module__["a" /* MenuPageModule */]();
        this._LAZY_LOADED_TOKEN_10 = __WEBPACK_IMPORTED_MODULE_15__menu__["a" /* MenuPage */];
        return this._MenuPageModule_6;
    };
    MenuPageModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */])) {
            return this._CommonModule_0;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_3__angular_forms__["l" /* ɵba */])) {
            return this._ɵba_1;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* FormsModule */])) {
            return this._FormsModule_2;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* ReactiveFormsModule */])) {
            return this._ReactiveFormsModule_3;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_4_ionic_angular_module__["a" /* IonicModule */])) {
            return this._IonicModule_4;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_4_ionic_angular_module__["b" /* IonicPageModule */])) {
            return this._IonicPageModule_5;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_1__menu_module__["a" /* MenuPageModule */])) {
            return this._MenuPageModule_6;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_2__angular_common__["j" /* NgLocalization */])) {
            return this._NgLocalization_7;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_3__angular_forms__["m" /* ɵi */])) {
            return this._ɵi_8;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormBuilder */])) {
            return this._FormBuilder_9;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_16_ionic_angular_util_module_loader__["a" /* LAZY_LOADED_TOKEN */])) {
            return this._LAZY_LOADED_TOKEN_10;
        }
        return notFoundResult;
    };
    MenuPageModuleInjector.prototype.destroyInternal = function () {
    };
    return MenuPageModuleInjector;
}(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ɵNgModuleInjector */]));
var MenuPageModuleNgFactory = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* NgModuleFactory */](MenuPageModuleInjector, __WEBPACK_IMPORTED_MODULE_1__menu_module__["a" /* MenuPageModule */]);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL21oYXJ0aW5ndG9uL0dpdEh1Yi9TdGFyVHJhY2stSW9uaWMvc3JjL3BhZ2VzL21lbnUvbWVudS5tb2R1bGUubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vVXNlcnMvbWhhcnRpbmd0b24vR2l0SHViL1N0YXJUcmFjay1Jb25pYy9zcmMvcGFnZXMvbWVudS9tZW51Lm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIgIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
//# sourceMappingURL=menu.module.ngfactory.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(120);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuPage = (function () {
    function MenuPage() {
    }
    return MenuPage;
}());
MenuPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])({
        segment: 'menu'
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Component */])({
        selector: 'page-menu',
        templateUrl: 'menu.html',
    }),
    __metadata("design:paramtypes", [])
], MenuPage);

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__menu__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(120);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MenuPageModule = (function () {
    function MenuPageModule() {
    }
    return MenuPageModule;
}());
MenuPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_1__menu__["a" /* MenuPage */]],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_1__menu__["a" /* MenuPage */])
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__menu__["a" /* MenuPage */]]
    })
], MenuPageModule);

//# sourceMappingURL=menu.module.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_MenuPage */
/* unused harmony export View_MenuPage_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPageNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_components_split_pane_split_pane__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_platform_platform__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_config_config__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__node_modules_ionic_angular_components_menu_menu_ngfactory__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_menu_menu__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular_components_app_menu_controller__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular_platform_keyboard__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_angular_gestures_gesture_controller__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_angular_platform_dom_controller__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ionic_angular_components_app_app__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__node_modules_ionic_angular_components_nav_nav_ngfactory__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ionic_angular_components_nav_nav__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ionic_angular_navigation_view_controller__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ionic_angular_navigation_nav_controller__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ionic_angular_transitions_transition_controller__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ionic_angular_navigation_deep_linker__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__menu__ = __webpack_require__(297);
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */


















var styles_MenuPage = [];
var RenderType_MenuPage = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ɵcrt */]({
    encapsulation: 2,
    styles: styles_MenuPage,
    data: {}
});
function View_MenuPage_0(l) {
    return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_41" /* ɵvid */](0, [
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ɵeld */](0, null, null, 19, 'ion-split-pane', [], null, null, null, null, null)),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵdid */](4341760, null, 1, __WEBPACK_IMPORTED_MODULE_1_ionic_angular_components_split_pane_split_pane__["b" /* SplitPane */], [
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular_platform_platform__["a" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular_config_config__["a" /* Config */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Renderer */]
        ], null, null),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵqud */](603979776, 1, { _setchildren: 1 }),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_36" /* ɵprd */](2048, [[
                1,
                4
            ]
        ], __WEBPACK_IMPORTED_MODULE_1_ionic_angular_components_split_pane_split_pane__["a" /* RootNode */], null, [__WEBPACK_IMPORTED_MODULE_1_ionic_angular_components_split_pane_split_pane__["b" /* SplitPane */]]),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵted */](null, ['\n  '])),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ɵeld */](0, null, null, 9, 'ion-menu', [
            [
                'role',
                'navigation'
            ],
            [
                'side',
                'start'
            ]
        ], null, null, null, __WEBPACK_IMPORTED_MODULE_4__node_modules_ionic_angular_components_menu_menu_ngfactory__["b" /* View_Menu_0 */], __WEBPACK_IMPORTED_MODULE_4__node_modules_ionic_angular_components_menu_menu_ngfactory__["a" /* RenderType_Menu */])),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵdid */](245760, null, 2, __WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_menu_menu__["a" /* Menu */], [
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular_components_app_menu_controller__["a" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular_config_config__["a" /* Config */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular_platform_platform__["a" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Renderer */],
            __WEBPACK_IMPORTED_MODULE_7_ionic_angular_platform_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_8_ionic_angular_gestures_gesture_controller__["l" /* GestureController */],
            __WEBPACK_IMPORTED_MODULE_9_ionic_angular_platform_dom_controller__["a" /* DomController */],
            __WEBPACK_IMPORTED_MODULE_10_ionic_angular_components_app_app__["a" /* App */]
        ], {
            content: [
                0,
                'content'
            ],
            side: [
                1,
                'side'
            ]
        }, null),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵqud */](335544320, 2, { menuContent: 0 }),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵqud */](335544320, 3, { menuNav: 0 }),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_36" /* ɵprd */](2048, [[
                1,
                4
            ]
        ], __WEBPACK_IMPORTED_MODULE_1_ionic_angular_components_split_pane_split_pane__["a" /* RootNode */], null, [__WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_menu_menu__["a" /* Menu */]]),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵted */](0, ['\n    '])),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ɵeld */](0, null, 0, 2, 'ion-nav', [[
                'root',
                'MenuListPage'
            ]
        ], null, null, null, __WEBPACK_IMPORTED_MODULE_11__node_modules_ionic_angular_components_nav_nav_ngfactory__["b" /* View_Nav_0 */], __WEBPACK_IMPORTED_MODULE_11__node_modules_ionic_angular_components_nav_nav_ngfactory__["a" /* RenderType_Nav */])),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵdid */](4374528, [[
                3,
                4
            ]
        ], 0, __WEBPACK_IMPORTED_MODULE_12_ionic_angular_components_nav_nav__["a" /* Nav */], [
            [
                2,
                __WEBPACK_IMPORTED_MODULE_13_ionic_angular_navigation_view_controller__["a" /* ViewController */]
            ],
            [
                2,
                __WEBPACK_IMPORTED_MODULE_14_ionic_angular_navigation_nav_controller__["a" /* NavController */]
            ],
            __WEBPACK_IMPORTED_MODULE_10_ionic_angular_components_app_app__["a" /* App */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular_config_config__["a" /* Config */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular_platform_platform__["a" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Renderer */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ComponentFactoryResolver */],
            __WEBPACK_IMPORTED_MODULE_8_ionic_angular_gestures_gesture_controller__["l" /* GestureController */],
            __WEBPACK_IMPORTED_MODULE_15_ionic_angular_transitions_transition_controller__["a" /* TransitionController */],
            [
                2,
                __WEBPACK_IMPORTED_MODULE_16_ionic_angular_navigation_deep_linker__["a" /* DeepLinker */]
            ],
            __WEBPACK_IMPORTED_MODULE_9_ionic_angular_platform_dom_controller__["a" /* DomController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* ErrorHandler */]
        ], { root: [
                0,
                'root'
            ]
        }, null),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_36" /* ɵprd */](6144, null, __WEBPACK_IMPORTED_MODULE_1_ionic_angular_components_split_pane_split_pane__["a" /* RootNode */], null, [__WEBPACK_IMPORTED_MODULE_12_ionic_angular_components_nav_nav__["a" /* Nav */]]),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵted */](0, ['\n  '])),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵted */](null, ['\n  '])),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ɵeld */](0, null, null, 2, 'ion-nav', [
            [
                'main',
                ''
            ],
            [
                'persistent',
                'false'
            ],
            [
                'root',
                'SearchPage'
            ]
        ], null, null, null, __WEBPACK_IMPORTED_MODULE_11__node_modules_ionic_angular_components_nav_nav_ngfactory__["b" /* View_Nav_0 */], __WEBPACK_IMPORTED_MODULE_11__node_modules_ionic_angular_components_nav_nav_ngfactory__["a" /* RenderType_Nav */])),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵdid */](4374528, [[
                'content',
                4
            ]
        ], 0, __WEBPACK_IMPORTED_MODULE_12_ionic_angular_components_nav_nav__["a" /* Nav */], [
            [
                2,
                __WEBPACK_IMPORTED_MODULE_13_ionic_angular_navigation_view_controller__["a" /* ViewController */]
            ],
            [
                2,
                __WEBPACK_IMPORTED_MODULE_14_ionic_angular_navigation_nav_controller__["a" /* NavController */]
            ],
            __WEBPACK_IMPORTED_MODULE_10_ionic_angular_components_app_app__["a" /* App */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular_config_config__["a" /* Config */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular_platform_platform__["a" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Renderer */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ComponentFactoryResolver */],
            __WEBPACK_IMPORTED_MODULE_8_ionic_angular_gestures_gesture_controller__["l" /* GestureController */],
            __WEBPACK_IMPORTED_MODULE_15_ionic_angular_transitions_transition_controller__["a" /* TransitionController */],
            [
                2,
                __WEBPACK_IMPORTED_MODULE_16_ionic_angular_navigation_deep_linker__["a" /* DeepLinker */]
            ],
            __WEBPACK_IMPORTED_MODULE_9_ionic_angular_platform_dom_controller__["a" /* DomController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* ErrorHandler */]
        ], { root: [
                0,
                'root'
            ]
        }, null),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_36" /* ɵprd */](2048, [[
                1,
                4
            ]
        ], __WEBPACK_IMPORTED_MODULE_1_ionic_angular_components_split_pane_split_pane__["a" /* RootNode */], null, [__WEBPACK_IMPORTED_MODULE_12_ionic_angular_components_nav_nav__["a" /* Nav */]]),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵted */](null, ['\n'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵted */](null, ['\n']))
    ], function (ck, v) {
        var currVal_0 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵnov */](v, 17);
        var currVal_1 = 'start';
        ck(v, 6, 0, currVal_0, currVal_1);
        var currVal_2 = 'MenuListPage';
        ck(v, 12, 0, currVal_2);
        var currVal_3 = 'SearchPage';
        ck(v, 17, 0, currVal_3);
    }, null);
}
function View_MenuPage_Host_0(l) {
    return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_41" /* ɵvid */](0, [
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ɵeld */](0, null, null, 1, 'page-menu', [], null, null, null, View_MenuPage_0, RenderType_MenuPage)),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵdid */](49152, null, 0, __WEBPACK_IMPORTED_MODULE_17__menu__["a" /* MenuPage */], [], null, null)
    ], null, null);
}
var MenuPageNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ɵccf */]('page-menu', __WEBPACK_IMPORTED_MODULE_17__menu__["a" /* MenuPage */], View_MenuPage_Host_0, {}, {}, []);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL21oYXJ0aW5ndG9uL0dpdEh1Yi9TdGFyVHJhY2stSW9uaWMvc3JjL3BhZ2VzL21lbnUvbWVudS5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9Vc2Vycy9taGFydGluZ3Rvbi9HaXRIdWIvU3RhclRyYWNrLUlvbmljL3NyYy9wYWdlcy9tZW51L21lbnUudHMiLCJuZzovLy9Vc2Vycy9taGFydGluZ3Rvbi9HaXRIdWIvU3RhclRyYWNrLUlvbmljL3NyYy9wYWdlcy9tZW51L21lbnUuaHRtbCIsIm5nOi8vL1VzZXJzL21oYXJ0aW5ndG9uL0dpdEh1Yi9TdGFyVHJhY2stSW9uaWMvc3JjL3BhZ2VzL21lbnUvbWVudS50cy5NZW51UGFnZV9Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIjxpb24tc3BsaXQtcGFuZT5cbiAgPGlvbi1tZW51IFtjb250ZW50XT1cImNvbnRlbnRcIiBzaWRlPVwic3RhcnRcIj5cbiAgICA8aW9uLW5hdiByb290PVwiTWVudUxpc3RQYWdlXCI+PC9pb24tbmF2PlxuICA8L2lvbi1tZW51PlxuICA8aW9uLW5hdiByb290PVwiU2VhcmNoUGFnZVwiICNjb250ZW50IHBlcnNpc3RlbnQ9XCJmYWxzZVwiIG1haW4+PC9pb24tbmF2PlxuPC9pb24tc3BsaXQtcGFuZT5cbiIsIjxwYWdlLW1lbnU+PC9wYWdlLW1lbnU+Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNBQTtnQkFBQTs7Ozs7O0lBQUE7S0FBQTtnQkFBQTtrQkFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQWdCO0lBQ2Q7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtLQUFBO2dCQUFBOzs7Ozs7Ozs7O0lBQUE7S0FBQTtNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO0tBQUE7Z0JBQUE7Z0JBQUE7a0JBQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUEyQztNQUN6QztRQUFBO1FBQUE7TUFBQTtJQUFBO2tCQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7TUFBQTtRQUFBOztNQUFBOztNQUFBO1FBQUE7O01BQUE7Ozs7Ozs7Ozs7O01BQUE7UUFBQTs7TUFBQTs7OztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtnQkFBQTtJQUF1QztJQUM5QjtJQUNYO01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7S0FBQTtrQkFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO01BQUE7UUFBQTs7TUFBQTs7TUFBQTtRQUFBOztNQUFBOzs7Ozs7Ozs7OztNQUFBO1FBQUE7O01BQUE7Ozs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7a0JBQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUFzRTtJQUN2RDs7O0lBSkw7SUFBb0I7SUFBOUIsU0FBVSxVQUFvQixTQUE5QjtJQUNXO0lBQVQsVUFBUyxTQUFUO0lBRU87SUFBVCxVQUFTLFNBQVQ7Ozs7O0lDSkY7Z0JBQUE7Ozs7In0=
//# sourceMappingURL=menu.ngfactory.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenderType_Menu; });
/* harmony export (immutable) */ __webpack_exports__["b"] = View_Menu_0;
/* unused harmony export MenuNgFactory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_components_backdrop_backdrop__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_menu_menu__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_app_menu_controller__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_config_config__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular_platform_platform__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular_platform_keyboard__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular_gestures_gesture_controller__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_angular_platform_dom_controller__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_angular_components_app_app__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ionic_angular_components_split_pane_split_pane__ = __webpack_require__(31);
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */











var styles_Menu = [];
var RenderType_Menu = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ɵcrt */]({
    encapsulation: 2,
    styles: styles_Menu,
    data: {}
});
function View_Menu_0(l) {
    return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_41" /* ɵvid */](2, [
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵqud */](402653184, 1, { backdrop: 0 }),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ɵeld */](0, null, null, 1, 'div', [[
                'class',
                'menu-inner'
            ]
        ], null, null, null, null, null)),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵncd */](null, 0),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ɵeld */](0, null, null, 1, 'ion-backdrop', [
            [
                'disable-activated',
                ''
            ],
            [
                'role',
                'presentation'
            ],
            [
                'tappable',
                ''
            ]
        ], null, null, null, null, null)),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵdid */](16384, [[
                1,
                4
            ]
        ], 0, __WEBPACK_IMPORTED_MODULE_1_ionic_angular_components_backdrop_backdrop__["a" /* Backdrop */], [
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Renderer */]
        ], null, null)
    ], null, null);
}
function View_Menu_Host_0(l) {
    return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_41" /* ɵvid */](0, [
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ɵeld */](0, null, null, 4, 'ion-menu', [[
                'role',
                'navigation'
            ]
        ], null, null, null, View_Menu_0, RenderType_Menu)),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵdid */](245760, null, 2, __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_menu_menu__["a" /* Menu */], [
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_app_menu_controller__["a" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular_config_config__["a" /* Config */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular_platform_platform__["a" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Renderer */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular_platform_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_7_ionic_angular_gestures_gesture_controller__["l" /* GestureController */],
            __WEBPACK_IMPORTED_MODULE_8_ionic_angular_platform_dom_controller__["a" /* DomController */],
            __WEBPACK_IMPORTED_MODULE_9_ionic_angular_components_app_app__["a" /* App */]
        ], null, null),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵqud */](335544320, 1, { menuContent: 0 }),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵqud */](335544320, 2, { menuNav: 0 }),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_36" /* ɵprd */](6144, null, __WEBPACK_IMPORTED_MODULE_10_ionic_angular_components_split_pane_split_pane__["a" /* RootNode */], null, [__WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_menu_menu__["a" /* Menu */]])
    ], function (ck, v) {
        ck(v, 1, 0);
    }, null);
}
var MenuNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ɵccf */]('ion-menu', __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_menu_menu__["a" /* Menu */], View_Menu_Host_0, {
    content: 'content',
    id: 'id',
    type: 'type',
    enabled: 'enabled',
    side: 'side',
    swipeEnabled: 'swipeEnabled',
    persistent: 'persistent',
    maxEdgeStart: 'maxEdgeStart'
}, {
    ionDrag: 'ionDrag',
    ionOpen: 'ionOpen',
    ionClose: 'ionClose'
}, ['*']);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL21oYXJ0aW5ndG9uL0dpdEh1Yi9TdGFyVHJhY2stSW9uaWMvbm9kZV9tb2R1bGVzL2lvbmljLWFuZ3VsYXIvY29tcG9uZW50cy9tZW51L21lbnUubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vVXNlcnMvbWhhcnRpbmd0b24vR2l0SHViL1N0YXJUcmFjay1Jb25pYy9ub2RlX21vZHVsZXMvaW9uaWMtYW5ndWxhci9jb21wb25lbnRzL21lbnUvbWVudS5kLnRzIiwibmc6Ly8vVXNlcnMvbWhhcnRpbmd0b24vR2l0SHViL1N0YXJUcmFjay1Jb25pYy9ub2RlX21vZHVsZXMvaW9uaWMtYW5ndWxhci9jb21wb25lbnRzL21lbnUvbWVudS5kLnRzLk1lbnUuaHRtbCIsIm5nOi8vL1VzZXJzL21oYXJ0aW5ndG9uL0dpdEh1Yi9TdGFyVHJhY2stSW9uaWMvbm9kZV9tb2R1bGVzL2lvbmljLWFuZ3VsYXIvY29tcG9uZW50cy9tZW51L21lbnUuZC50cy5NZW51X0hvc3QuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgIiwiPGRpdiBjbGFzcz1cIm1lbnUtaW5uZXJcIj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9kaXY+PGlvbi1iYWNrZHJvcD48L2lvbi1iYWNrZHJvcD4iLCI8aW9uLW1lbnU+PC9pb24tbWVudT4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQ0FBO1FBQUE7UUFBQTtNQUFBO0lBQUE7Z0JBQXdCO0lBQStCO01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7S0FBQTtrQkFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBOzs7SUFBQTtLQUFBOzs7Ozs7TUNBdkQ7UUFBQTtRQUFBO01BQUE7SUFBQTtnQkFBQTs7Ozs7Ozs7OztJQUFBO0tBQUE7Z0JBQUE7Z0JBQUE7Z0JBQUE7OztJQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
//# sourceMappingURL=menu.ngfactory.js.map

/***/ })

});