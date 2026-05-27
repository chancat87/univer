import {
  UniverActionRecorderPlugin
} from "./chunk-IDABSBFY.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-7I6CB5Y3.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-PYASHCXN.js";
import {
  UniverUniscriptPlugin
} from "./chunk-I3B3CJZS.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-LM4E4F5H.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-UIE3Y3AG.js";
import "./chunk-57SCL377.js";
import {
  UniverDebuggerPlugin
} from "./chunk-VNSWFS4U.js";
import "./chunk-6Y42HTA3.js";
import {
  UniverWatermarkPlugin
} from "./chunk-Y65XFGY6.js";
import "./chunk-3PLDZ4VH.js";
import "./chunk-BN223HPL.js";
import "./chunk-Q33QYGSC.js";
import "./chunk-QFLFXVSG.js";
import "./chunk-6DOBQSM7.js";
import "./chunk-A6FOZVPY.js";
import "./chunk-H7EOKAK7.js";
import "./chunk-YI67N2NN.js";
import "./chunk-OXQW5F2S.js";
import "./chunk-GMC4FNZY.js";
import "./chunk-6BJ26NAD.js";
import "./chunk-4JSWIADO.js";
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
