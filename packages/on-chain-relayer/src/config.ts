import dotenv from "dotenv";
import { ConditionChecksNames } from "./types";

dotenv.config();

const getFromEnv = (name: string, optional: boolean = false) => {
  const envVariable = process.env[name];
  const env = process.env.NODE_ENV;
  if (!envVariable && env !== "test" && !optional) {
    throw new Error(`Missing environment variable ${name}`);
  }
  return envVariable;
};

export const config = Object.freeze({
  relayerIterationInterval: Number(
    getFromEnv("RELAYER_ITERATION_INTERVAL")
  ) as number,
  updatePriceInterval: Number(getFromEnv("UPDATE_PRICE_INTERVAL")) as number,
  rpcUrl: getFromEnv("RPC_URL") as string,
  chainName: getFromEnv("CHAIN_NAME") as string,
  chainId: getFromEnv("CHAIN_ID") as string,
  privateKey: getFromEnv("PRIVATE_KEY") as string,
  adapterContractAddress: getFromEnv("ADAPTER_CONTRACT_ADDRESS") as string,
  dataServiceId: getFromEnv("DATA_SERVICE_ID") as string,
  uniqueSignersCount: Number(getFromEnv("UNIQUE_SIGNERS_COUNT")) as number,
  dataFeeds: JSON.parse(getFromEnv("DATA_FEEDS") ?? "[]") as string[],
  cacheServiceUrls: JSON.parse(
    getFromEnv("CACHE_SERVICE_URLS") ?? "[]"
  ) as string[],
  gasLimit: getFromEnv("GAS_LIMIT") as string,
  updateConditions: JSON.parse(
    getFromEnv("UPDATE_CONDITIONS") ?? "[]"
  ) as ConditionChecksNames[],
  minDeviationPercentage: Number(
    getFromEnv(
      "MIN_DEVIATION_PERCENTAGE",
      !(
        JSON.parse(getFromEnv("UPDATE_CONDITIONS") ?? "[]") as string[]
      ).includes("value-deviation")
    )
  ) as number,
});