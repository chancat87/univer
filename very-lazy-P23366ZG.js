import {
  UniverActionRecorderPlugin
} from "./chunk-2B4742OI.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-OCEBFR7L.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-I3T66LKM.js";
import {
  UniverUniscriptPlugin
} from "./chunk-7BOKOO3I.js";
import "./chunk-GMDX6E2J.js";
import "./chunk-A3DRKKMY.js";
import "./chunk-WLDOIN2T.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-LNLJQUKS.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-L5TUQ5O4.js";
import "./chunk-O4ZMPXLF.js";
import {
  UniverDebuggerPlugin
} from "./chunk-JUS4G727.js";
import {
  UniverWatermarkPlugin
} from "./chunk-KY62Z2HS.js";
import "./chunk-QSN5EZAZ.js";
import "./chunk-GXWVLXXZ.js";
import "./chunk-LFWH636K.js";
import {
  loadDebuggerLocale
} from "./chunk-RAQB7QKQ.js";
import "./chunk-XRVR2H52.js";
import "./chunk-GDSMKYWA.js";
import "./chunk-Z2NBOTBN.js";
import "./chunk-OSRA6HXZ.js";
import "./chunk-QYY2YWST.js";
import "./chunk-G66X4HVS.js";
import "./chunk-3Z2XPC36.js";
import "./chunk-EGKTDU4O.js";
import "./chunk-EQ2B2W73.js";
import "./chunk-DO7PIA5W.js";

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
