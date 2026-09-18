"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";

export default function CopyEmail({ email }: { email: string }) {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );
  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setStatus("copied");
    } catch {
      setStatus("error");
    }
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setStatus("idle"), 4000);
  }
  return (
    <div className="copy-email">
      <button type="button" onClick={copy} aria-label="Copy email address">
        {status === "copied" ? (
          <Check size={18} aria-hidden="true" />
        ) : (
          <Copy size={18} aria-hidden="true" />
        )}
      </button>
      <span role="status">
        {status === "copied"
          ? "Email copied"
          : status === "error"
            ? "Couldn’t copy. Select the email to copy it."
            : ""}
      </span>
    </div>
  );
}
