import {
  UniverActionRecorderPlugin
} from "./chunk-XMJ4WOJI.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-S2RC2HGR.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-DP77LRRU.js";
import {
  UniverUniscriptPlugin
} from "./chunk-F22H6SZT.js";
import "./chunk-GMDX6E2J.js";
import "./chunk-A3DRKKMY.js";
import "./chunk-WLDOIN2T.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-O2EQN7HR.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-IXGMJNRY.js";
import "./chunk-OWFFAVOF.js";
import {
  UniverDebuggerPlugin
} from "./chunk-6OPR354K.js";
import {
  UniverWatermarkPlugin
} from "./chunk-JDROPMWD.js";
import "./chunk-HD67YVN4.js";
import "./chunk-6HEPUY3H.js";
import "./chunk-W2X5ZSFK.js";
import "./chunk-EHDL7PAH.js";
import "./chunk-CEZ3ASA2.js";
import "./chunk-6AIOLZKF.js";
import "./chunk-UUF7XU7O.js";
import "./chunk-ECONR6RM.js";
import "./chunk-TVPZ3PEL.js";
import "./chunk-CZ2PTCAX.js";
import "./chunk-ZBHWPOF6.js";
import "./chunk-IDTDYMR7.js";
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
