"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useAppDispatch } from "@/store";
import { changeTab } from "@/store/slices/handleUISlice";

export  function TabManager() {
  const pathname = usePathname();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (pathname === "/create-note") {
      dispatch(changeTab("create"));
    } else {
      dispatch(changeTab("notes"));
    }
  }, [pathname, dispatch]);

  return null;
}
