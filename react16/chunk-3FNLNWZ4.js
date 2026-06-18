import {
  GlobalRangeSelectorService
} from "./chunk-GL3WHIUS.js";
import {
  FUniver
} from "./chunk-FMZL2PTE.js";

// ../packages/sheets-formula-ui/src/facade/f-univer.ts
var FUniverSheetsFormulaUIMixin = class extends FUniver {
  showRangeSelectorDialog(opts) {
    const globalRangeSelectorService = this._injector.get(GlobalRangeSelectorService);
    return globalRangeSelectorService.showRangeSelectorDialog(opts);
  }
};
FUniver.extend(FUniverSheetsFormulaUIMixin);
