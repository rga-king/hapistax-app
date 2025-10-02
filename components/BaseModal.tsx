"use client";
import { ReactNode, useEffect } from "react";
import styles from "@/css/BaseModal.module.css";

type BaseModalProps = {
  children: ReactNode,
  isVisible: boolean
}

export default function BaseModal({ children, isVisible }: BaseModalProps) {
  useEffect(() => {
  document.body.style.overflow = isVisible ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isVisible]);

  return (
    <div
      className={`${styles.baseModal} ${
        isVisible ? styles.fadeIn : styles.fadeOut
      }`}
    >
      {children}
    </div>
  );
}
