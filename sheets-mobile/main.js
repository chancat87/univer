import {
  UniverSheetsConditionalFormattingMobileUIPlugin,
  UniverSheetsDataValidationMobileUIPlugin,
  UniverSheetsFilterMobileUIPlugin
} from "../chunk-3PVLMVOS.js";
import "../chunk-LCNXKX57.js";
import {
  UniverSheetsFilterPlugin
} from "../chunk-W2X5ZSFK.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "../chunk-4WLNR2DM.js";
import {
  UniverSheetsFormulaUIPlugin
} from "../chunk-EHDL7PAH.js";
import {
  UniverSheetsNumfmtPlugin
} from "../chunk-4UT46N5G.js";
import {
  UniverSheetsMobileUIPlugin
} from "../chunk-CEZ3ASA2.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-6AIOLZKF.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin,
  UniverSheetsDataValidationPlugin
} from "../chunk-UUF7XU7O.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverMobileUIPlugin
} from "../chunk-ECONR6RM.js";
import {
  zh_CN_default
} from "../chunk-A44DDVT2.js";
import {
  UniverSheetsFormulaPlugin
} from "../chunk-TVPZ3PEL.js";
import {
  UniverFormulaEnginePlugin,
  UniverRPCMainThreadPlugin,
  UniverSheetsPlugin
} from "../chunk-CZ2PTCAX.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-ZBHWPOF6.js";
import {
  Univer,
  UserManagerService
} from "../chunk-IDTDYMR7.js";
import "../chunk-EQ2B2W73.js";
import "../chunk-DO7PIA5W.js";

// src/sheets-mobile/main.ts
var univer = new Univer({
  locale: "zhCN" /* ZH_CN */,
  locales: {
    ["zhCN" /* ZH_CN */]: zh_CN_default
  },
  logLevel: 4 /* VERBOSE */
});
univer.registerPlugin(UniverFormulaEnginePlugin);
univer.registerPlugin(UniverDocsPlugin);
univer.registerPlugin(UniverRenderEnginePlugin);
univer.registerPlugin(UniverMobileUIPlugin, {
  container: "app"
});
var worker = new Worker(new URL("./worker.js", import.meta.url), { type: "module" });
univer.registerPlugin(UniverRPCMainThreadPlugin, { workerURL: worker });
univer.onDispose(() => worker.terminate());
univer.registerPlugin(UniverDocsUIPlugin);
univer.registerPlugin(UniverSheetsPlugin);
univer.registerPlugin(UniverSheetsMobileUIPlugin);
univer.registerPlugin(UniverSheetsFilterPlugin);
univer.registerPlugin(UniverSheetsFilterMobileUIPlugin);
univer.registerPlugin(UniverSheetsNumfmtPlugin);
univer.registerPlugin(UniverSheetsNumfmtUIPlugin);
univer.registerPlugin(UniverSheetsFormulaPlugin);
univer.registerPlugin(UniverSheetsFormulaUIPlugin);
univer.registerPlugin(UniverSheetsConditionalFormattingMobileUIPlugin);
univer.registerPlugin(UniverSheetsDataValidationPlugin);
univer.registerPlugin(UniverSheetsDataValidationMobileUIPlugin);
var mockUser = {
  userID: "Owner_qxVnhPbQ",
  name: "Owner",
  avatar: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAInSURBVHgBtZU9TxtBEIbfWRzFSIdkikhBSqRQkJqkCKTCFkqVInSUSaT0wC8w/gXxD4gU2nRJkXQWhAZowDUUWKIwEgWWbEEB3mVmx3dn4DA2nB/ppNuPeWd29mMIPXDr+RxwtgRHeW6+guNPRxogqnL7Dwz9psJ27S4NShaeZTH3kwXy6I81dlRKcmRui88swdq9AcSFL7Buz1Vmlns64MiLsCjzwnIYHLH57tbfFbs7KRaXyEU8FVZofqccOfA5l7Q8LPIkGrwnb2RPNEXWFVMUF3L+kDCk0btDDAMzOm5YfAHDwp4tG74wnzAsiOYMnJ3GoDybA7IT98/jm5+JNnfiIzAS6LlqHQBN/i6b2t/cV1Hh6BfwYlHnHP4AXi5q/8kmMMpOs8+BixZw/Fd6xUEHEbnkgclvQP2fGp7uShRKnQ3G32rkjV1th8JhIGG7tR/JyjGteSOZELwGMmNqIIigRCLRh2OZIE6BjItdd7pCW6Uhm1zzkUtungSxwEUzNpQ+GQumtH1ej1MqgmNT6vwmhCq5yuwq56EYTbgeQUz3yvrpV1b4ok3nYJ+eYhgYmjRUqErx2EDq0Fr8FhG++iqVGqxlUJI/70Ar0UgJaWHj6hYVHJrfKssAHot1JfqwE9WVWzXZVd5z2Ws/4PnmtEjkXeKJDvxUecLbWOXH/DP6QQ4J72NS0adedp1aseBfXP8odlZFfPvBF7SN/8hky1TYuPOAXAEipMx15u5ToAAAAABJRU5ErkJggg==",
  anonymous: false,
  canBindAnonymous: false
};
var injector = univer.__getInjector();
var userManagerService = injector.get(UserManagerService);
userManagerService.setCurrentUser(mockUser);
univer.createUnit(2 /* UNIVER_SHEET */, DEFAULT_WORKBOOK_DATA_DEMO);
