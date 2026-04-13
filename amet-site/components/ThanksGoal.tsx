"use client";

import { useEffect } from "react";

import { reachMetrikaGoal } from "@/lib/metrika";

export default function ThanksGoal() {
  useEffect(() => {
    reachMetrikaGoal("lead_form");
  }, []);

  return null;
}
