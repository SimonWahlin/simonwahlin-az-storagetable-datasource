///<reference path="../node_modules/grafana-sdk-mocks/app/headers/common.d.ts" />
System.register(["lodash", "app/plugins/sdk", "./css/query_editor.css!"], function (exports_1, context_1) {
    "use strict";
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
    var __moduleName = context_1 && context_1.id;
    var lodash_1, sdk_1, AzStorageTableQueryCtrl;
    return {
        setters: [
            function (lodash_1_1) {
                lodash_1 = lodash_1_1;
            },
            function (sdk_1_1) {
                sdk_1 = sdk_1_1;
            },
            function (_1) {
            }
        ],
        execute: function () {///<reference path="../node_modules/grafana-sdk-mocks/app/headers/common.d.ts" />
            AzStorageTableQueryCtrl = /** @class */ (function (_super) {
                __extends(AzStorageTableQueryCtrl, _super);
                /** @ngInject **/
                function AzStorageTableQueryCtrl($scope, $injector, templateSrv) {
                    var _this = _super.call(this, $scope, $injector) || this;
                    _this.templateSrv = templateSrv;
                    _this.defaults = {};
                    lodash_1.default.defaultsDeep(_this.target, _this.defaults);
                    _this.target.target = _this.target.target || 'select metric';
                    _this.target.type = _this.target.type || 'timeserie';
                    return _this;
                }
                AzStorageTableQueryCtrl.prototype.getOptions = function (query) {
                    return this.datasource.metricFindQuery(query || '');
                };
                AzStorageTableQueryCtrl.prototype.onChangeInternal = function () {
                    this.panelCtrl.refresh(); // Asks the panel to refresh data.
                };
                AzStorageTableQueryCtrl.templateUrl = 'partials/query.editor.html';
                return AzStorageTableQueryCtrl;
            }(sdk_1.QueryCtrl));
            exports_1("AzStorageTableQueryCtrl", AzStorageTableQueryCtrl);
        }
    };
});
//# sourceMappingURL=query_ctrl.js.map