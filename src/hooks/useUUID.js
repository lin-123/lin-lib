import { useMemo } from "react";
import { randomStr } from "uc-fun";

export default function useUUID(prefix) {
  return useMemo(() => randomStr(4, prefix), []);
}
