import {
  UniverSheetsConditionalFormattingPreset,
  UniverSheetsCorePreset,
  UniverSheetsDataValidationPreset,
  UniverSheetsDrawingPreset,
  UniverSheetsFilterPreset,
  UniverSheetsFindReplacePreset,
  UniverSheetsHyperLinkPreset,
  UniverSheetsNotePreset,
  UniverSheetsSortPreset,
  UniverSheetsTablePreset,
  UniverSheetsThreadCommentPreset,
  zh_CN_default,
  zh_CN_default2 as zh_CN_default3,
  zh_CN_default3 as zh_CN_default4,
  zh_CN_default4 as zh_CN_default6,
  zh_CN_default5 as zh_CN_default7,
  zh_CN_default6 as zh_CN_default8,
  zh_CN_default7 as zh_CN_default9,
  zh_CN_default8 as zh_CN_default10,
  zh_CN_default9 as zh_CN_default11
} from "../chunk-NXZQZKMR.js";
import "../chunk-2UVVUJP2.js";
import "../chunk-WQDBWIBE.js";
import "../chunk-2I3PBFW2.js";
import "../chunk-OKSBY2IJ.js";
import "../chunk-6JRPPN4T.js";
import "../chunk-TE47Q5VG.js";
import "../chunk-OYNTQE7A.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-PXGELTPL.js";
import {
  createUniver
} from "../chunk-YUBTVLIY.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-TAWGJECY.js";
import "../chunk-MMJKH2KG.js";
import "../chunk-MBPRHYBX.js";
import "../chunk-LHCPJCEG.js";
import "../chunk-3KO4XCYB.js";
import "../chunk-RIE7YTA4.js";
import "../chunk-SZZUMBNL.js";
import "../chunk-DFI64RHC.js";
import "../chunk-Q2ISKF2I.js";
import "../chunk-EG4UUNSJ.js";
import "../chunk-5ARVCA6J.js";
import "../chunk-GE3T6SEC.js";
import "../chunk-XDJQRT7P.js";
import "../chunk-QI2AEB5F.js";
import "../chunk-IMWY7PB3.js";
import "../chunk-3EHXFAKA.js";
import "../chunk-AC3C4POW.js";
import "../chunk-HNRLDDQL.js";
import "../chunk-RWIIW5II.js";
import "../chunk-6JGXY3LE.js";
import "../chunk-RUBWMXYG.js";
import "../chunk-WRDP6BX6.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-VDSGT5AZ.js";
import "../chunk-RLB6KXB7.js";
import "../chunk-LOQW54LO.js";
import "../chunk-E7KT3G3T.js";
import "../chunk-2236G4QD.js";
import "../chunk-RJX7H74E.js";
import "../chunk-QSEVI5FA.js";
import {
  default_default,
  mergeLocales
} from "../chunk-TGSCZSOP.js";
import "../chunk-EQ2B2W73.js";
import "../chunk-HECJ2TYE.js";

// src/preset-sheets-core-with-worker/main.ts
var { univer, univerAPI } = createUniver({
  locale: "zhCN" /* ZH_CN */,
  locales: {
    zhCN: mergeLocales(
      zh_CN_default2,
      zh_CN_default4,
      zh_CN_default,
      zh_CN_default3,
      zh_CN_default5,
      zh_CN_default6,
      zh_CN_default7,
      zh_CN_default8,
      zh_CN_default9,
      zh_CN_default10,
      zh_CN_default11
    )
  },
  theme: default_default,
  presets: [
    UniverSheetsCorePreset({
      workerURL: new Worker(new URL("./worker.js", import.meta.url), { type: "module" })
    }),
    UniverSheetsDrawingPreset(),
    UniverSheetsConditionalFormattingPreset(),
    UniverSheetsFilterPreset(),
    UniverSheetsHyperLinkPreset(),
    UniverSheetsDataValidationPreset(),
    UniverSheetsFindReplacePreset(),
    UniverSheetsNotePreset(),
    UniverSheetsSortPreset(),
    UniverSheetsTablePreset(),
    UniverSheetsThreadCommentPreset()
  ]
});
univerAPI.createWorkbook(DEFAULT_WORKBOOK_DATA_DEMO);
window.univer = univer;
window.univerAPI = univerAPI;
