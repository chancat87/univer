import {
  UniverActionRecorderPlugin
} from "./chunk-F24KFZPL.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-73VIGS3O.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-YYM4RZWG.js";
import {
  UniverUniscriptPlugin
} from "./chunk-V7ITBWUQ.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-SVLFUNWJ.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-QHKCFVMN.js";
import "./chunk-IIXKWGJP.js";
import {
  UniverDebuggerPlugin
} from "./chunk-ET6TEFKU.js";
import "./chunk-EGNQIECW.js";
import {
  UniverWatermarkPlugin
} from "./chunk-FNIX4H3H.js";
import "./chunk-FXKLHA5Q.js";
import "./chunk-SN33JSK4.js";
import "./chunk-A2OOC2ZY.js";
import "./chunk-PT6I5QRE.js";
import "./chunk-AWDSMMM7.js";
import "./chunk-4VVRTWTJ.js";
import "./chunk-TMQGZNIJ.js";
import "./chunk-Z2IVZDG5.js";
import "./chunk-JVAUVJXG.js";
import "./chunk-IJXT2JU6.js";
import "./chunk-DSDMX7LI.js";
import "./chunk-63HVW4WP.js";
import "./chunk-EQ2B2W73.js";
import "./chunk-24OICD5T.js";

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
