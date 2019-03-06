/// <reference path="../node_modules/grafana-sdk-mocks/app/headers/common.d.ts" />
export default class AzStorageTableDatasource {
    private backendSrv;
    private templateSrv;
    private $q;
    storageAccount: string;
    storageAccountKey: string;
    tableName: string;
    partitionKey: string;
    private tableSvc;
    /** @ngInject */
    constructor(instanceSettings: any, backendSrv: any, templateSrv: any, $q: any);
    query(options: any): void;
    annotationQuery(options: any): void;
    metricFindQuery(query: string): void;
    data: any;
    testDatasource(): {
        status: string;
        message: string;
        title: string;
    };
    connect(): void;
}
