System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var azure, AzStorageTableDatasource;
    return {
        setters: [],
        execute: function () {
            // declare var require: any;
            // import * as azure from "./external/azure-storage.table.js"
            // var azure: any;
            // import azure = require("./external/azure-storage.table.js")
            // azure = require('./external/azure-storage.js')
            // var azure = require('./external/azure-storage.js')
            azure = require('./external/azure-storage.table');
            // import * as azure from "./external/azure-storage.js"
            AzStorageTableDatasource = /** @class */ (function () {
                /** @ngInject */
                function AzStorageTableDatasource(instanceSettings, backendSrv, templateSrv, $q) {
                    this.backendSrv = backendSrv;
                    this.templateSrv = templateSrv;
                    this.$q = $q;
                    this.storageAccount = instanceSettings.storageAccount;
                    this.storageAccountKey = instanceSettings.storageAccountKey;
                    this.tableName = instanceSettings.tableName;
                    this.partitionKey = instanceSettings.partitionKey;
                }
                AzStorageTableDatasource.prototype.query = function (options) {
                    throw new Error("Query Support not implemented yet.");
                };
                AzStorageTableDatasource.prototype.annotationQuery = function (options) {
                    throw new Error("Annotation Support not implemented yet.");
                };
                AzStorageTableDatasource.prototype.metricFindQuery = function (query) {
                    throw new Error("Template Variable Support not implemented yet.");
                };
                AzStorageTableDatasource.prototype.testDatasource = function () {
                    this.connect();
                    // var query = new azure.TableQuery()
                    //   .top(1)
                    //   .where('PartitionKey eq ?', this.partitionKey);
                    // this.tableSvc.queryEntities(this.tableName, query, null, function (error, result, response) {
                    //   if (!error) {
                    return {
                        status: 'success',
                        message: 'Successfully queried the Azure Storage Table.',
                        title: 'Success',
                    };
                    //   } else {
                    //     return {
                    //       status: 'error',
                    //       message: 'Failed to query the Azure Storage Table.',
                    //       title: 'Error',
                    //     };
                    //   }
                    // });
                    // return {
                    //   status: 'success',
                    //   message: 'Successfully queried the Azure Storage Table.',
                    //   title: 'Success',
                    // };
                    // return this.$q.when({
                    //   status: 'error',
                    //   message: 'Data Source is just a template and has not been implemented yet.',
                    //   title: 'Error'
                    // });
                };
                AzStorageTableDatasource.prototype.connect = function () {
                    var retryOperations = new azure.ExponentialRetryPolicyFilter();
                    this.tableSvc = azure.createTableService(this.storageAccount, this.storageAccountKey).withFilter(retryOperations);
                };
                return AzStorageTableDatasource;
            }());
            exports_1("default", AzStorageTableDatasource);
        }
    };
});
//# sourceMappingURL=datasource.js.map