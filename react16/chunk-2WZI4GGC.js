import {
  GlobalRangeSelectorService
} from "./chunk-YLLESA75.js";
import {
  FUniver
} from "./chunk-ZO5MZRTT.js";

// ../packages/sheets-formula-ui/src/facade/f-univer.ts
var FUniverSheetsFormulaUIMixin = class extends FUniver {
  showRangeSelectorDialog(opts) {
    const globalRangeSelectorService = this._injector.get(GlobalRangeSelectorService);
    return globalRangeSelectorService.showRangeSelectorDialog(opts);
  }
};
FUniver.extend(FUniverSheetsFormulaUIMixin);
