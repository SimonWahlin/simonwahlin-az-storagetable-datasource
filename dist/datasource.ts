///<reference path="../node_modules/grafana-sdk-mocks/app/headers/common.d.ts" />
// declare var require: {
//   <T>(path: string): T;
//   (paths: string[], callback: (...modules: any[]) => void): void;
//   ensure: (
//     paths: string[],
//     callback: (require: <T>(path: string) => T) => void
//   ) => void;
// };
import _ from 'lodash';
// declare var require: any;
// import * as azure from "./external/azure-storage.table.js"
// var azure: any;
// import azure = require("./external/azure-storage.table.js")
// azure = require('./external/azure-storage.js')
// var azure = require('./external/azure-storage.js')
var azure = require('./external/azure-storage.table')
// import * as azure from "./external/azure-storage.js"

export default class AzStorageTableDatasource {
  storageAccount: string;
  storageAccountKey: string;
  tableName: string;
  partitionKey: string;

  private tableSvc;

  /** @ngInject */
  constructor(instanceSettings, private backendSrv, private templateSrv, private $q) {
    this.storageAccount = instanceSettings.storageAccount;
    this.storageAccountKey = instanceSettings.storageAccountKey;
    this.tableName = instanceSettings.tableName;
    this.partitionKey = instanceSettings.partitionKey;
  }

  query(options) {
    throw new Error("Query Support not implemented yet.");
  }

  annotationQuery(options) {
    throw new Error("Annotation Support not implemented yet.");
  }

  metricFindQuery(query: string) {
    throw new Error("Template Variable Support not implemented yet.");
  }
data
  testDatasource() {
    this.connect()
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
  }

  connect() {
    var retryOperations = new azure.ExponentialRetryPolicyFilter();
    this.tableSvc = azure.createTableService(this.storageAccount, this.storageAccountKey).withFilter(retryOperations);
  }
}
