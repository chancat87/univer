import {
  UniverActionRecorderPlugin
} from "./chunk-OXBWHVHG.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-HSFTMAWZ.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-ARZKGOZX.js";
import {
  UniverUniscriptPlugin
} from "./chunk-OB6S6RLH.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-YAHM5H7O.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-PRSA5U6M.js";
import "./chunk-57SCL377.js";
import {
  UniverDebuggerPlugin
} from "./chunk-I5FID2DT.js";
import "./chunk-RNOBK53O.js";
import {
  UniverWatermarkPlugin
} from "./chunk-Y65XFGY6.js";
import "./chunk-42YUNXYN.js";
import "./chunk-BN223HPL.js";
import "./chunk-Q33QYGSC.js";
import "./chunk-3QKY464I.js";
import "./chunk-NXLBRPSM.js";
import "./chunk-OUPAFTZU.js";
import "./chunk-EGU5CICW.js";
import "./chunk-YI67N2NN.js";
import "./chunk-OXQW5F2S.js";
import "./chunk-GMC4FNZY.js";
import "./chunk-6BJ26NAD.js";
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
