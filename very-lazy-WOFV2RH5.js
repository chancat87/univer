import {
  UniverActionRecorderPlugin
} from "./chunk-72LQIRWK.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-2JX6ZWCA.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-7IRBNK3U.js";
import {
  UniverUniscriptPlugin
} from "./chunk-UX3DZBPQ.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-QJ6HG3IS.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-ZBPXUESB.js";
import "./chunk-Z2MMSTQ5.js";
import {
  UniverDebuggerPlugin
} from "./chunk-VDTYOTRX.js";
import {
  UniverWatermarkPlugin
} from "./chunk-SVIEONY5.js";
import "./chunk-6WKDVGJP.js";
import "./chunk-YLLESA75.js";
import "./chunk-LJQQEGH7.js";
import {
  loadDebuggerLocale
} from "./chunk-HENJB45Y.js";
import "./chunk-24DSUN32.js";
import "./chunk-R57BLDMF.js";
import "./chunk-ZO5MZRTT.js";
import "./chunk-6GMDXAUM.js";
import "./chunk-GIASHSLF.js";
import "./chunk-TNPXDSFM.js";
import "./chunk-YFZT4CFH.js";
import "./chunk-JAAZE2FX.js";
import "./chunk-EQ2B2W73.js";
import "./chunk-HECJ2TYE.js";

// src/sheets/very-lazy.ts
var IS_E2E = false;
function getVeryLazyPlugins() {
  const plugins = [
    [UniverActionRecorderPlugin],
    [UniverSheetsHyperLinkUIPlugin],
    [UniverSheetsSortUIPlugin],
    [UniverSheetsCrosshairHighlightPlugin],
    [UniverSheetsFindReplacePlugin],
    [UniverWatermarkPlugin]
  ];
  if (!IS_E2E) {
    plugins.push([UniverDebuggerPlugin, {
      fabEntryUnitType: 2 /* UNIVER_SHEET */,
      localeLoader: loadDebuggerLocale
    }]);
    plugins.push([UniverUniscriptPlugin, {
      getWorkerUrl(_, label) {
        if (label === "json") {
          return "/vs/language/json/json.worker.js";
        }
        if (label === "css" || label === "scss" || label === "less") {
          return "/vs/language/css/css.worker.js";
        }
        if (label === "html" || label === "handlebars" || label === "razor") {
          return "/vs/language/html/html.worker.js";
        }
        if (label === "typescript" || label === "javascript") {
          return "/vs/language/typescript/ts.worker.js";
        }
        return "/vs/editor/editor.worker.js";
      }
    }]);
  }
  return plugins;
}
export {
  getVeryLazyPlugins as default
};
