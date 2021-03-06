/// <reference path="../node_modules/grafana-sdk-mocks/app/headers/common.d.ts" />
import { QueryCtrl } from 'app/plugins/sdk';
import './css/query_editor.css!';
export declare class AzStorageTableQueryCtrl extends QueryCtrl {
    private templateSrv;
    static templateUrl: string;
    defaults: {};
    /** @ngInject **/
    constructor($scope: any, $injector: any, templateSrv: any);
    getOptions(query: any): any;
    onChangeInternal(): void;
}
