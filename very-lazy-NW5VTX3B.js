import {
  UniverActionRecorderPlugin
} from "./chunk-75J5HWFO.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-YRPINS44.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-22OZZC2N.js";
import {
  UniverUniscriptPlugin
} from "./chunk-GL3PG6RT.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-EZJO4FIV.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-2CA7TW3E.js";
import "./chunk-C7B3GQ7C.js";
import {
  UniverDebuggerPlugin
} from "./chunk-KONYRXBO.js";
import {
  UniverWatermarkPlugin
} from "./chunk-IBF3NIDV.js";
import "./chunk-EW4PHSHV.js";
import "./chunk-SGEKE45M.js";
import "./chunk-3GQUFSHT.js";
import "./chunk-HA24AIUK.js";
import "./chunk-F4F2YYY6.js";
import "./chunk-NAN42NNV.js";
import "./chunk-QWPPYM36.js";
import "./chunk-A4ZIYGHQ.js";
import "./chunk-B4NUTUQI.js";
import "./chunk-RBUELYHQ.js";
import "./chunk-UUV633F7.js";
import "./chunk-5IFCPQIO.js";
import "./chunk-EQ2B2W73.js";
import "./chunk-24OICD5T.js";

// src/sheets-multi-units/very-lazy.ts
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
