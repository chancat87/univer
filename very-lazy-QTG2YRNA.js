import {
  UniverActionRecorderPlugin
} from "./chunk-ZGGCP3T5.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-F2YSG4AH.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-RKG5O3QU.js";
import {
  UniverUniscriptPlugin
} from "./chunk-U27J6WLD.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-NJSEE6IQ.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-T33XVP2P.js";
import "./chunk-KZFUNX4V.js";
import {
  UniverDebuggerPlugin
} from "./chunk-4AOJVOVE.js";
import "./chunk-4RE3GBNZ.js";
import {
  UniverWatermarkPlugin
} from "./chunk-562KIWQJ.js";
import "./chunk-4X74J3VY.js";
import "./chunk-PDE7V4JY.js";
import "./chunk-WSYXK7KQ.js";
import "./chunk-JZGEVVHZ.js";
import "./chunk-44O7LPIC.js";
import "./chunk-CQ6T5GVI.js";
import "./chunk-RXK56TCF.js";
import "./chunk-AUWBG7XV.js";
import "./chunk-43TF6VLP.js";
import "./chunk-VTOJ6EY3.js";
import "./chunk-MQVOOHA3.js";
import "./chunk-66WYSUE4.js";
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
