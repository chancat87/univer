import {
  UniverActionRecorderPlugin
} from "./chunk-KT3ZG5UT.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-DULB2JG5.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-A76IT4W7.js";
import {
  UniverUniscriptPlugin
} from "./chunk-KZJM5VK7.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-3OP7I4VC.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-5VODY5JO.js";
import "./chunk-S5JUJZLG.js";
import {
  UniverDebuggerPlugin
} from "./chunk-2OMOKZ33.js";
import "./chunk-JJPHOOJZ.js";
import {
  UniverWatermarkPlugin
} from "./chunk-MEK4W47U.js";
import "./chunk-YBVW43HL.js";
import "./chunk-PTH4ZFW6.js";
import "./chunk-Y4ZPO4RD.js";
import "./chunk-MDTS46IY.js";
import "./chunk-MWDP76KP.js";
import "./chunk-22VMBDC5.js";
import "./chunk-LYXQRSZ3.js";
import "./chunk-BJILIWTN.js";
import "./chunk-VTJS4LWT.js";
import "./chunk-WRUL4T3Z.js";
import "./chunk-KRIGFYA2.js";
import "./chunk-QXSHBFLW.js";
import "./chunk-EQ2B2W73.js";
import "./chunk-24OICD5T.js";

// src/sheets-no-worker/very-lazy.ts
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
    plugins.push([UniverDebuggerPlugin]);
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
