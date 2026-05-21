import {
  UniverActionRecorderPlugin
} from "./chunk-DHNEVNIM.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-XLBOW3SN.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-OAZNX6G7.js";
import {
  UniverUniscriptPlugin
} from "./chunk-ZRHRMZNN.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-DVJSX4AS.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-5K7WENLO.js";
import "./chunk-EJGQQCOR.js";
import {
  UniverDebuggerPlugin
} from "./chunk-NDG7KGUI.js";
import "./chunk-KP5O7VEP.js";
import {
  UniverWatermarkPlugin
} from "./chunk-23AVRTHF.js";
import "./chunk-F5OC5IPX.js";
import "./chunk-NVB4KPF5.js";
import "./chunk-M5KARBFS.js";
import "./chunk-7IHWFKAL.js";
import "./chunk-LL4GZLYH.js";
import "./chunk-XVNIPRWP.js";
import "./chunk-OOIWN6DP.js";
import "./chunk-WMC5D3J2.js";
import "./chunk-TO4WQNEE.js";
import "./chunk-RJPALBRL.js";
import "./chunk-RK6SZT5J.js";
import "./chunk-EJHY6CWE.js";
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
