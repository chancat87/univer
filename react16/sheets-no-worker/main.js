import "../chunk-KSXPNKWR.js";
import "../chunk-TXVVQJFI.js";
import {
  UniverNetworkPlugin
} from "../chunk-OIKKDFLS.js";
import "../chunk-HBGRYLOQ.js";
import {
  UniverSheetsThreadCommentPlugin
} from "../chunk-MCU7VS5Z.js";
import "../chunk-PPCSYJSV.js";
import {
  UniverSheetsNotePlugin,
  UniverSheetsTablePlugin
} from "../chunk-74HFMGP5.js";
import {
  UniverSheetsZenEditorPlugin
} from "../chunk-ANPYO53U.js";
import {
  UniverSheetsHyperLinkPlugin
} from "../chunk-AWHXLMAM.js";
import {
  UniverSheetsSortPlugin
} from "../chunk-CLVCDLYQ.js";
import "../chunk-6ZTLU7PB.js";
import {
  UniverDebuggerPlugin
} from "../chunk-HT6SHGO5.js";
import "../chunk-IF37WRIX.js";
import "../chunk-IETYKXRU.js";
import "../chunk-P3COAZ6H.js";
import "../chunk-SM5XGW6L.js";
import {
  FUniver
} from "../chunk-RRPQGQCJ.js";
import {
  UniverSheetsConditionalFormattingPlugin
} from "../chunk-EHC5QH3R.js";
import {
  UniverSheetsFilterPlugin
} from "../chunk-BSAX7R4H.js";
import "../chunk-LL3C23MC.js";
import {
  UniverSheetsNumfmtPlugin
} from "../chunk-FVDEHCGA.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-PQXBTX33.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-3MPN2FQO.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin,
  UniverSheetsDataValidationPlugin
} from "../chunk-UYLQVP27.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-RDPVWSGF.js";
import {
  zh_CN_default
} from "../chunk-BX66AN5H.js";
import {
  UniverSheetsFormulaPlugin
} from "../chunk-CTBLWIU7.js";
import {
  UniverFormulaEnginePlugin,
  UniverRPCMainThreadPlugin,
  UniverSheetsPlugin
} from "../chunk-QLAYCCMO.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-ADPAOSVN.js";
import {
  Univer,
  UserManagerService
} from "../chunk-P5OMPNXM.js";
import "../chunk-EQ2B2W73.js";
import "../chunk-24OICD5T.js";

// src/sheets-no-worker/main.ts
var IS_E2E = false;
var LOAD_LAZY_PLUGINS_TIMEOUT = 100;
var LOAD_VERY_LAZY_PLUGINS_TIMEOUT = 1e3;
var mockUser = {
  userID: "Owner_qxVnhPbQ",
  name: "Owner",
  avatar: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAInSURBVHgBtZU9TxtBEIbfWRzFSIdkikhBSqRQkJqkCKTCFkqVInSUSaT0wC8w/gXxD4gU2nRJkXQWhAZowDUUWKIwEgWWbEEB3mVmx3dn4DA2nB/ppNuPeWd29mMIPXDr+RxwtgRHeW6+guNPRxogqnL7Dwz9psJ27S4NShaeZTH3kwXy6I81dlRKcmRui88swdq9AcSFL7Buz1Vmlns64MiLsCjzwnIYHLH57tbfFbs7KRaXyEU8FVZofqccOfA5l7Q8LPIkGrwnb2RPNEXWFVMUF3L+kDCk0btDDAMzOm5YfAHDwp4tG74wnzAsiOYMnJ3GoDybA7IT98/jm5+JNnfiIzAS6LlqHQBN/i6b2t/cV1Hh6BfwYlHnHP4AXi5q/8kmMMpOs8+BixZw/Fd6xUEHEbnkgclvQP2fGp7uShRKnQ3G32rkjV1th8JhIGG7tR/JyjGteSOZELwGMmNqIIigRCLRh2OZIE6BjItdd7pCW6Uhm1zzkUtungSxwEUzNpQ+GQumtH1ej1MqgmNT6vwmhCq5yuwq56EYTbgeQUz3yvrpV1b4ok3nYJ+eYhgYmjRUqErx2EDq0Fr8FhG++iqVGqxlUJI/70Ar0UgJaWHj6hYVHJrfKssAHot1JfqwE9WVWzXZVd5z2Ws/4PnmtEjkXeKJDvxUecLbWOXH/DP6QQ4J72NS0adedp1aseBfXP8odlZFfPvBF7SN/8hky1TYuPOAXAEipMx15u5ToAAAAABJRU5ErkJggg==",
  anonymous: false,
  canBindAnonymous: false
};
function createNewInstance() {
  const univer = new Univer({
    // theme: greenTheme,
    darkMode: localStorage.getItem("local.darkMode") === "dark",
    locale: "zhCN" /* ZH_CN */,
    locales: {
      ["zhCN" /* ZH_CN */]: zh_CN_default
    },
    logLevel: 4 /* VERBOSE */
  });
  const worker = new Worker(new URL("./worker.js", import.meta.url), { type: "module" });
  univer.registerPlugin(UniverRPCMainThreadPlugin, { workerURL: worker });
  univer.registerPlugin(UniverDocsPlugin);
  univer.registerPlugin(UniverRenderEnginePlugin);
  univer.registerPlugin(UniverUIPlugin, {
    container: "app",
    ribbonType: "classic"
  });
  univer.registerPlugin(UniverDocsUIPlugin);
  univer.registerPlugin(UniverSheetsPlugin, {
    autoHeightForMergedCells: true
  });
  univer.registerPlugin(UniverSheetsUIPlugin);
  univer.registerPlugin(UniverSheetsNumfmtPlugin);
  univer.registerPlugin(UniverSheetsZenEditorPlugin);
  univer.registerPlugin(UniverFormulaEnginePlugin);
  univer.registerPlugin(UniverSheetsFormulaPlugin, { writeArrayFormulaToSnapshot: true });
  univer.registerPlugin(UniverSheetsDataValidationPlugin);
  univer.registerPlugin(UniverSheetsConditionalFormattingPlugin);
  univer.registerPlugin(UniverSheetsFilterPlugin);
  univer.registerPlugin(UniverSheetsSortPlugin);
  univer.registerPlugin(UniverSheetsHyperLinkPlugin);
  univer.registerPlugin(UniverSheetsThreadCommentPlugin);
  univer.registerPlugin(UniverSheetsTablePlugin);
  univer.registerPlugin(UniverNetworkPlugin);
  univer.registerPlugin(UniverSheetsNotePlugin);
  if (IS_E2E) {
    univer.registerPlugin(UniverDebuggerPlugin, {
      fab: false,
      performanceMonitor: {
        enabled: false
      }
    });
  }
  const injector = univer.__getInjector();
  const userManagerService = injector.get(UserManagerService);
  userManagerService.setCurrentUser(mockUser);
  if (!IS_E2E) {
    univer.createUnit(2 /* UNIVER_SHEET */, DEFAULT_WORKBOOK_DATA_DEMO);
  }
  setTimeout(() => {
    import("../lazy-XH2TWYBI.js").then((lazy) => {
      const plugins = lazy.default();
      plugins.forEach((p) => univer.registerPlugin(p[0], p[1]));
    });
  }, LOAD_LAZY_PLUGINS_TIMEOUT);
  setTimeout(() => {
    import("../very-lazy-RQIC55FI.js").then((lazy) => {
      const plugins = lazy.default();
      plugins.forEach((p) => univer.registerPlugin(p[0], p[1]));
    });
  }, LOAD_VERY_LAZY_PLUGINS_TIMEOUT);
  univer.onDispose(() => {
    worker.terminate();
    window.univer = void 0;
    window.univerAPI = void 0;
  });
  window.univer = univer;
  window.univerAPI = FUniver.newAPI(univer);
}
createNewInstance();
window.createNewInstance = createNewInstance;
export {
  mockUser
};
