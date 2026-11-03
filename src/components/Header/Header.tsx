"use client";
import { useAppSelector, useAppDispatch } from "@/store";
import clsx from "clsx";
import styles from "./Header.module.css";
import { changeTab } from "@/store/slices/handleUISlice";
import { useRouter } from "next/navigation";
const { appHeader, appTitle, appTabs, tab, active } = styles;

export default function Header() {
  const TABS = useAppSelector((state) => state.handleUI.tabs);
  const activeTab = useAppSelector((state) => state.handleUI.activeTab);
  const dispatch = useAppDispatch();
  const router = useRouter();
  function handleTabClick(tabId: string) {
    if (activeTab === tabId) return null;
    if (tabId === "create") {
      console.log(1);
      router.push("/create-note");
    } else {
      router.push("/");
    }
    dispatch(changeTab(tabId));
  }
  return (
    <header className={appHeader}>
      <h1 className={appTitle}>Notes</h1>
      <nav className={appTabs}>
        {TABS.map((tabObj) => (
          <button
            key={tabObj.id}
            className={clsx(tab, activeTab === tabObj.id && active)}
            onClick={() => {
              handleTabClick(tabObj.id);
            }}
          >
            {tabObj.label}
          </button>
        ))}
      </nav>
    </header>
  );
}
