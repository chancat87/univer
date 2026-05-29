import {
  UniverActionRecorderPlugin
} from "./chunk-IP5OPD54.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-UY7TUFZO.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-BFZPFXBC.js";
import {
  UniverUniscriptPlugin
} from "./chunk-3SFYBOOB.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-FDZR4MQG.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-2K6RYGP5.js";
import "./chunk-OLFSUVVB.js";
import {
  UniverDebuggerPlugin
} from "./chunk-VA4EB27I.js";
import "./chunk-IDAF5KQV.js";
import {
  UniverWatermarkPlugin
} from "./chunk-T5JVQ22K.js";
import "./chunk-LURNFXWC.js";
import "./chunk-OYR5WA5U.js";
import "./chunk-2ROSD5A5.js";
import "./chunk-LWII4FG3.js";
import "./chunk-YSII74MQ.js";
import "./chunk-H7KEOQON.js";
import "./chunk-XFVBBIHA.js";
import "./chunk-PZXAACJY.js";
import "./chunk-LMTAFAGU.js";
import "./chunk-47V545ES.js";
import "./chunk-7PNPXMSO.js";
import "./chunk-4JSWIADO.js";
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
