"use client";

import { useEffect, useState } from "react";
import { useProgress } from "@/store/progress";

export function useHydrated() {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    const unsub = useProgress.persist?.onFinishHydration?.(() =>
      setHydrated(true)
    );
    if (useProgress.persist?.hasHydrated?.()) setHydrated(true);
    useProgress.getState().syncDaily();
    return unsub;
  }, []);
  return hydrated;
}
