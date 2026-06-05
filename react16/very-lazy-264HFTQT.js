import {
  UniverActionRecorderPlugin
} from "./chunk-VVSHWHKD.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-I5N6NLBB.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-ITUTMIXJ.js";
import {
  UniverUniscriptPlugin
} from "./chunk-BGPPLR6F.js";
import "./chunk-GMDX6E2J.js";
import "./chunk-A3DRKKMY.js";
import "./chunk-WLDOIN2T.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-IWRMA4SQ.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-RM357LTT.js";
import "./chunk-LTFMDMK3.js";
import {
  UniverDebuggerPlugin
} from "./chunk-B4BZSTML.js";
import {
  UniverWatermarkPlugin
} from "./chunk-PS54CEWU.js";
import "./chunk-LUJIK2CK.js";
import "./chunk-GX3KAXUW.js";
import "./chunk-FNXED5ID.js";
import "./chunk-55MM7D42.js";
import "./chunk-7GAOXSGD.js";
import "./chunk-MIJJ7SGO.js";
import "./chunk-SDBIGTWI.js";
import "./chunk-ULYJ4AEG.js";
import "./chunk-G4MAVNYM.js";
import "./chunk-KIV2V2IY.js";
import "./chunk-3VI6RKZ6.js";
import "./chunk-CLNOWGEJ.js";
import "./chunk-EQ2B2W73.js";
import "./chunk-DO7PIA5W.js";

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
