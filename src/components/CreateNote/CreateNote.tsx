"use client";

import { useAppSelector } from "@/store";
import styles from "./CreateNote.module.css";
import NoteForm from "@/components/NoteForm";

const CreateNote = () => {
  const activeTab = useAppSelector((state) => state.handleUI.activeTab);
  return (
    activeTab === "create" && (
      <section className={styles.noteFormSection}>
        <NoteForm />
      </section>
    )
  );
};

export default CreateNote;
