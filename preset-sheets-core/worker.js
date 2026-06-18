import {
  createUniver
} from "../chunk-ZOPQKTXM.js";
import "../chunk-ZO5MZRTT.js";
import {
  UniverRemoteSheetsFormulaPlugin
} from "../chunk-GIASHSLF.js";
import {
  UniverFormulaEnginePlugin,
  UniverRPCWorkerThreadPlugin,
  UniverSheetsPlugin
} from "../chunk-TNPXDSFM.js";
import "../chunk-YFZT4CFH.js";
import "../chunk-JAAZE2FX.js";
import "../chunk-EQ2B2W73.js";
import "../chunk-HECJ2TYE.js";

// ../presets/packages/preset-sheets-core/src/worker.ts
function UniverSheetsCoreWorkerPreset(config = {}) {
  const {
    formula
  } = config;
  return {
    plugins: [
      [UniverSheetsPlugin, { onlyRegisterFormulaRelatedMutations: true }],
      [UniverFormulaEnginePlugin, { function: formula == null ? void 0 : formula.function }],
      UniverRPCWorkerThreadPlugin,
      UniverRemoteSheetsFormulaPlugin
    ]
  };
}

// src/preset-sheets-core/worker.ts
createUniver({
  presets: [
    UniverSheetsCoreWorkerPreset()
  ]
});
