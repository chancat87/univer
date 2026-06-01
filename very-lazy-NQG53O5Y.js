import {
  UniverActionRecorderPlugin
} from "./chunk-G45HQBTE.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-223TH54E.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-OYMHLICG.js";
import {
  UniverUniscriptPlugin
} from "./chunk-7P5N5DGX.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-B7DYB4RG.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-QDSHEKIZ.js";
import "./chunk-Y2F3SRTI.js";
import {
  UniverDebuggerPlugin
} from "./chunk-ABQENYII.js";
import {
  UniverWatermarkPlugin
} from "./chunk-ZBOT6NRA.js";
import "./chunk-UVKI3FK3.js";
import "./chunk-SGEKE45M.js";
import "./chunk-LB2YNGLK.js";
import "./chunk-EWZN3U25.js";
import "./chunk-NEC7X7OM.js";
import "./chunk-TBMDMLWP.js";
import "./chunk-V7TVWOVD.js";
import "./chunk-UZQSRV7M.js";
import "./chunk-TDDTJ2MZ.js";
import "./chunk-BWZ6GQIM.js";
import "./chunk-4ZR7A7BJ.js";
import "./chunk-5IFCPQIO.js";
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
