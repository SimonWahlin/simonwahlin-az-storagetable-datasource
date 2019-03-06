System.register(["./datasource", "./query_ctrl", "./config_ctrl"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var datasource_1, query_ctrl_1, config_ctrl_1, AzStorageTableAnnotationsQueryCtrl;
    return {
        setters: [
            function (datasource_1_1) {
                datasource_1 = datasource_1_1;
            },
            function (query_ctrl_1_1) {
                query_ctrl_1 = query_ctrl_1_1;
            },
            function (config_ctrl_1_1) {
                config_ctrl_1 = config_ctrl_1_1;
            }
        ],
        execute: function () {
            exports_1("Datasource", datasource_1.default);
            exports_1("QueryCtrl", query_ctrl_1.AzStorageTableQueryCtrl);
            exports_1("ConfigCtrl", config_ctrl_1.AzStorageTableConfigCtrl);
            AzStorageTableAnnotationsQueryCtrl = /** @class */ (function () {
                function AzStorageTableAnnotationsQueryCtrl() {
                }
                AzStorageTableAnnotationsQueryCtrl.templateUrl = 'partials/annotations.editor.html';
                return AzStorageTableAnnotationsQueryCtrl;
            }());
            exports_1("AnnotationsQueryCtrl", AzStorageTableAnnotationsQueryCtrl);
        }
    };
});
//# sourceMappingURL=module.js.map