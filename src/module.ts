import AzStorageTableDatasource from './datasource';
import {AzStorageTableQueryCtrl} from './query_ctrl';
import {AzStorageTableConfigCtrl} from './config_ctrl';

class AzStorageTableAnnotationsQueryCtrl {
  static templateUrl = 'partials/annotations.editor.html';
}

export {
  AzStorageTableDatasource as Datasource,
  AzStorageTableQueryCtrl as QueryCtrl,
  AzStorageTableConfigCtrl as ConfigCtrl,
  AzStorageTableAnnotationsQueryCtrl as AnnotationsQueryCtrl,
};
