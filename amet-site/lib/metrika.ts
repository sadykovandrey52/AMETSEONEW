declare global {
  interface Window {
    ym?: (id: number, action: "reachGoal", goal: string) => void;
  }
}

export function getMetrikaId(): number | null {
  const metrikaId = Number(process.env.NEXT_PUBLIC_METRIKA_ID);
  if (!metrikaId || Number.isNaN(metrikaId)) {
    return null;
  }
  return metrikaId;
}

export function reachMetrikaGoal(goal: string) {
  const metrikaId = getMetrikaId();
  if (!metrikaId || typeof window === "undefined") {
    return;
  }

  window.ym?.(metrikaId, "reachGoal", goal);
}
