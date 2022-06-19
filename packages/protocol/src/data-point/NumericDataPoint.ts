import { FixedSizeDataPoint } from "./FixedSizeDataPoint";
import { convertNumberToBytes, ConvertableToBytes32 } from "../common/utils";
import {
  DEFAULT_NUM_VALUE_BS,
  DEFAULT_NUM_VALUE_DECIMALS,
} from "../common/redstone-consts";

// This data point does not store information about data size in its serialized value
export class NumericDataPoint extends FixedSizeDataPoint {
  constructor(
    symbol: ConvertableToBytes32,
    value: number,
    decimals: number = DEFAULT_NUM_VALUE_DECIMALS,
    byteSize: number = DEFAULT_NUM_VALUE_BS
  ) {
    const valueBytes = convertNumberToBytes(value, decimals, byteSize);
    super(symbol, valueBytes, byteSize);
  }
}