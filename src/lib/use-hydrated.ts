"use client";

import { useEffect, useSyncExternalStore } from "react";
import { useProgress } from "@/store/progress";

export function useHydrated() {
  const hydrated = useSyncExternalStore(
    (cb) => useProgress.persist?.onFinishHydration?.(cb) ?? (() => {}),
    () => useProgress.persist?.hasHydrated?.() ?? true,
    () => false
  );
  useEffect(() => {
    useProgress.getState().syncDaily();
  }, []);
  return hydrated;
}
