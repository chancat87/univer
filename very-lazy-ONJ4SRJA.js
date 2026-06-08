import {
  UniverActionRecorderPlugin
} from "./chunk-7G2PFMI6.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-XVH6Y33U.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-OLTT34LK.js";
import {
  UniverUniscriptPlugin
} from "./chunk-GWXR4QBB.js";
import "./chunk-GMDX6E2J.js";
import "./chunk-A3DRKKMY.js";
import "./chunk-WLDOIN2T.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-OT6YJABG.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-J56WIIMS.js";
import "./chunk-NQJP32X7.js";
import {
  UniverDebuggerPlugin
} from "./chunk-M3ELQF3I.js";
import {
  UniverWatermarkPlugin
} from "./chunk-TL5J2JF3.js";
import "./chunk-DZG24DRY.js";
import "./chunk-RGR2G2GE.js";
import "./chunk-UWQ4OTPN.js";
import "./chunk-MG6S74S4.js";
import "./chunk-FADFDPJO.js";
import "./chunk-NCMWFBVU.js";
import "./chunk-BWPHDXYN.js";
import "./chunk-NCOHMOMQ.js";
import "./chunk-C5ZDEYK2.js";
import "./chunk-G5QND7UH.js";
import "./chunk-F2DPNTXI.js";
import "./chunk-6UZK77F2.js";
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
