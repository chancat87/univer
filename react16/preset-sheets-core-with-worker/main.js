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
} from "../chunk-IMW7MKQS.js";
import "../chunk-RS5LYR44.js";
import "../chunk-B2KUFF6H.js";
import "../chunk-PLBFM5CG.js";
import "../chunk-QVS53T2M.js";
import "../chunk-TH5R62RU.js";
import "../chunk-2LSXDUTJ.js";
import "../chunk-D667LWGJ.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-FY7IHX2E.js";
import {
  createUniver
} from "../chunk-OUW7ZZJK.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-SGZ2HHVL.js";
import "../chunk-YOIN3OEC.js";
import "../chunk-HRFROEZN.js";
import "../chunk-2DJZTWJ5.js";
import "../chunk-WU4TNNKJ.js";
import "../chunk-56G5Y6SP.js";
import "../chunk-NLOGJINI.js";
import "../chunk-NAQQU7YI.js";
import "../chunk-USCC6GVR.js";
import "../chunk-4DUKKF5B.js";
import "../chunk-M7YIPXG2.js";
import "../chunk-NENHIOGR.js";
import "../chunk-VANE5BSS.js";
import "../chunk-4UBAF5MM.js";
import "../chunk-E76AX5ER.js";
import "../chunk-NYYGRMLU.js";
import "../chunk-I6GUBEEQ.js";
import "../chunk-KDGVEVAK.js";
import "../chunk-27VYB5XE.js";
import "../chunk-MAD3JRBW.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-CK4XAVSA.js";
import "../chunk-UQYEOB6K.js";
import "../chunk-LOQW54LO.js";
import "../chunk-BIOJ5KTK.js";
import "../chunk-QAY465GM.js";
import "../chunk-UBUTY46K.js";
import "../chunk-M3MJBN7C.js";
import {
  default_default,
  mergeLocales
} from "../chunk-XMQDOTMR.js";
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
