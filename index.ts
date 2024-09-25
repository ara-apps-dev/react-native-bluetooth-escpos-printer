import { NativeModules } from "react-native";

const { BluetoothManager, BluetoothEscposPrinter, BluetoothTscPrinter } =
  NativeModules;

// Define types for BluetoothTscPrinter
type Direction = {
  FORWARD: number;
  BACKWARD: number;
};

type Density = {
  DNESITY0: number;
  DNESITY1: number;
  DNESITY2: number;
  DNESITY3: number;
  DNESITY4: number;
  DNESITY5: number;
  DNESITY6: number;
  DNESITY7: number;
  DNESITY8: number;
  DNESITY9: number;
  DNESITY10: number;
  DNESITY11: number;
  DNESITY12: number;
  DNESITY13: number;
  DNESITY14: number;
  DNESITY15: number;
};

type BarcodeType = {
  CODE128: string;
  CODE128M: string;
  EAN128: string;
  ITF25: string;
  ITF25C: string;
  CODE39: string;
  CODE39C: string;
  CODE39S: string;
  CODE93: string;
  EAN13: string;
  EAN13_2: string;
  EAN13_5: string;
  EAN8: string;
  EAN8_2: string;
  EAN8_5: string;
  CODABAR: string;
  POST: string;
  UPCA: string;
  UPCA_2: string;
  UPCA_5: string;
  UPCE: string;
  UPCE_2: string;
  UPCE_5: string;
  CPOST: string;
  MSI: string;
  MSIC: string;
  PLESSEY: string;
  ITF14: string;
  EAN14: string;
};

type FontType = {
  FONT_1: string;
  FONT_2: string;
  FONT_3: string;
  FONT_4: string;
  FONT_5: string;
  FONT_6: string;
  FONT_7: string;
  FONT_8: string;
  SIMPLIFIED_CHINESE: string;
  TRADITIONAL_CHINESE: string;
  KOREAN: string;
};

type EEC = {
  LEVEL_L: string;
  LEVEL_M: string;
  LEVEL_Q: string;
  LEVEL_H: string;
};

type Rotation = {
  ROTATION_0: number;
  ROTATION_90: number;
  ROTATION_180: number;
  ROTATION_270: number;
};

type FontMul = {
  MUL_1: number;
  MUL_2: number;
  MUL_3: number;
  MUL_4: number;
  MUL_5: number;
  MUL_6: number;
  MUL_7: number;
  MUL_8: number;
  MUL_9: number;
  MUL_10: number;
};

type BitmapMode = {
  OVERWRITE: number;
  OR: number;
  XOR: number;
};

type PrintSpeed = {
  SPEED1DIV5: number;
  SPEED2: number;
  SPEED3: number;
  SPEED4: number;
};

type Tear = {
  ON: string;
  OFF: string;
};

type Readable = {
  DISABLE: number;
  EANBLE: number;
};

// Assign types to BluetoothTscPrinter constants
BluetoothTscPrinter.DIRECTION = {
  FORWARD: 0,
  BACKWARD: 1,
} as Direction;

BluetoothTscPrinter.DENSITY = {
  DNESITY0: 0,
  DNESITY1: 1,
  DNESITY2: 2,
  DNESITY3: 3,
  DNESITY4: 4,
  DNESITY5: 5,
  DNESITY6: 6,
  DNESITY7: 7,
  DNESITY8: 8,
  DNESITY9: 9,
  DNESITY10: 10,
  DNESITY11: 11,
  DNESITY12: 12,
  DNESITY13: 13,
  DNESITY14: 14,
  DNESITY15: 15,
} as Density;

BluetoothTscPrinter.BARCODETYPE = {
  CODE128: "128",
  CODE128M: "128M",
  EAN128: "EAN128",
  ITF25: "25",
  ITF25C: "25C",
  CODE39: "39",
  CODE39C: "39C",
  CODE39S: "39S",
  CODE93: "93",
  EAN13: "EAN13",
  EAN13_2: "EAN13+2",
  EAN13_5: "EAN13+5",
  EAN8: "EAN8",
  EAN8_2: "EAN8+2",
  EAN8_5: "EAN8+5",
  CODABAR: "CODA",
  POST: "POST",
  UPCA: "EAN13",
  UPCA_2: "EAN13+2",
  UPCA_5: "EAN13+5",
  UPCE: "EAN13",
  UPCE_2: "EAN13+2",
  UPCE_5: "EAN13+5",
  CPOST: "CPOST",
  MSI: "MSI",
  MSIC: "MSIC",
  PLESSEY: "PLESSEY",
  ITF14: "ITF14",
  EAN14: "EAN14",
} as BarcodeType;

BluetoothTscPrinter.FONTTYPE = {
  FONT_1: "1",
  FONT_2: "2",
  FONT_3: "3",
  FONT_4: "4",
  FONT_5: "5",
  FONT_6: "6",
  FONT_7: "7",
  FONT_8: "8",
  SIMPLIFIED_CHINESE: "TSS24.BF2",
  TRADITIONAL_CHINESE: "TST24.BF2",
  KOREAN: "K",
} as FontType;

BluetoothTscPrinter.EEC = {
  LEVEL_L: "L",
  LEVEL_M: "M",
  LEVEL_Q: "Q",
  LEVEL_H: "H",
} as EEC;

BluetoothTscPrinter.ROTATION = {
  ROTATION_0: 0,
  ROTATION_90: 90,
  ROTATION_180: 180,
  ROTATION_270: 270,
} as Rotation;

BluetoothTscPrinter.FONTMUL = {
  MUL_1: 1,
  MUL_2: 2,
  MUL_3: 3,
  MUL_4: 4,
  MUL_5: 5,
  MUL_6: 6,
  MUL_7: 7,
  MUL_8: 8,
  MUL_9: 9,
  MUL_10: 10,
} as FontMul;

BluetoothTscPrinter.BITMAP_MODE = {
  OVERWRITE: 0,
  OR: 1,
  XOR: 2,
} as BitmapMode;

BluetoothTscPrinter.PRINT_SPEED = {
  SPEED1DIV5: 1,
  SPEED2: 2,
  SPEED3: 3,
  SPEED4: 4,
} as PrintSpeed;

BluetoothTscPrinter.TEAR = {
  ON: "ON",
  OFF: "OFF",
} as Tear;

BluetoothTscPrinter.READABLE = {
  DISABLE: 0,
  EANBLE: 1,
} as Readable;

// Define types for BluetoothEscposPrinter
type ErrorCorrection = {
  L: number;
  M: number;
  Q: number;
  H: number;
};

type EscposBarcodeType = {
  UPC_A: number;
  UPC_E: number;
  JAN13: number;
  JAN8: number;
  CODE39: number;
  ITF: number;
  CODABAR: number;
  CODE93: number;
  CODE128: number;
};

type EscposRotation = {
  OFF: number;
  ON: number;
};

type Align = {
  LEFT: number;
  CENTER: number;
  RIGHT: number;
};

BluetoothEscposPrinter.ERROR_CORRECTION = {
  L: 1,
  M: 0,
  Q: 3,
  H: 2,
} as ErrorCorrection;

BluetoothEscposPrinter.BARCODETYPE = {
  UPC_A: 65,
  UPC_E: 66,
  JAN13: 67,
  JAN8: 68,
  CODE39: 69,
  ITF: 70,
  CODABAR: 71,
  CODE93: 72,
  CODE128: 73,
} as EscposBarcodeType;

BluetoothEscposPrinter.ROTATION = {
  OFF: 0,
  ON: 1,
} as EscposRotation;

BluetoothEscposPrinter.ALIGN = {
  LEFT: 0,
  CENTER: 1,
  RIGHT: 2,
} as Align;

export { BluetoothManager, BluetoothEscposPrinter, BluetoothTscPrinter };
