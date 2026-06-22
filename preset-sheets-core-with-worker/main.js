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
} from "../chunk-Y4T4K5FF.js";
import "../chunk-LJ7JNWRB.js";
import "../chunk-3BLOT4I4.js";
import "../chunk-KYDBL4JQ.js";
import "../chunk-HRS7BS4O.js";
import "../chunk-Y73ZXPYU.js";
import "../chunk-GEZVA24X.js";
import "../chunk-DTB5SSOI.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-FY7IHX2E.js";
import {
  createUniver
} from "../chunk-TBK7QCQ7.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-AE7SMOJJ.js";
import "../chunk-AMKNCDSZ.js";
import "../chunk-YJJDXGY5.js";
import "../chunk-NQMKE4RY.js";
import "../chunk-BUXOUBFL.js";
import "../chunk-H7H44NSG.js";
import "../chunk-LQWFYSIS.js";
import "../chunk-55PVUM4T.js";
import "../chunk-NJ4A6MU4.js";
import "../chunk-QTO2H6RN.js";
import "../chunk-4NPMPVHI.js";
import "../chunk-YR5UNHC6.js";
import "../chunk-D6M66X3V.js";
import "../chunk-WZIS5H2B.js";
import "../chunk-IMWY7PB3.js";
import "../chunk-JV4NI3HW.js";
import "../chunk-IIEQMUHM.js";
import "../chunk-CZVNJKVJ.js";
import "../chunk-HQS5AD5N.js";
import "../chunk-6RUFGJLY.js";
import "../chunk-3QW3A2DW.js";
import "../chunk-WRDP6BX6.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-RVRSM6WU.js";
import "../chunk-SZGQ3BB2.js";
import "../chunk-LOQW54LO.js";
import "../chunk-UU5HAGBO.js";
import "../chunk-QAY465GM.js";
import "../chunk-3WNTGTNW.js";
import "../chunk-HHTIJANW.js";
import {
  default_default,
  mergeLocales
} from "../chunk-TSO7IYVY.js";
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
