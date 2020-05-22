import { useStorageState } from "react-storage-hooks";

export function useLocalStorageState(...args) {
  return useStorageState(localStorage, ...args);
}
