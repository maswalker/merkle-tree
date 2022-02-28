import {
  MerkleDistributorInfo,
  OldFormat,
  parseBalanceMap
} from "./utils/parse-balance-map"

export function parseBalances(balances: OldFormat): MerkleDistributorInfo {
  return parseBalanceMap(balances)
}