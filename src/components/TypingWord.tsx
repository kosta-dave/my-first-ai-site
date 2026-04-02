"use client";

import { useEffect, useMemo, useState } from "react";

type TypingPhrase = {
  text: string;
  className?: string;
};

type TypingWordProps = {
  phrases: TypingPhrase[];
  className?: string;
  textClassName?: string;
  typingMsPerChar?: number;
  deletingMsPerChar?: number;
  holdAfterTypedMs?: number;
  holdAfterDeletedMs?: number;
  cursor?: string;
  cursorClassName?: string;
};

export function TypingWord({
  phrases,
  className,
  textClassName,
  typingMsPerChar = 75,
  deletingMsPerChar = 35,
  holdAfterTypedMs = 1100,
  holdAfterDeletedMs = 250,
  cursor = "|",
  cursorClassName,
}: TypingWordProps) {
  const safePhrases = useMemo(
    () => phrases.filter((p) => Boolean(p?.text)),
    [phrases],
  );

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(0);
  const [mode, setMode] = useState<"typing" | "holding" | "deleting">("typing");

  const currentPhrase =
    safePhrases.length > 0
      ? safePhrases[phraseIndex % safePhrases.length]
      : undefined;
  const currentText = currentPhrase?.text ?? "";
  const shown = currentText.slice(0, visibleCount);

  useEffect(() => {
    if (!currentText) return;

    const isFullyTyped = visibleCount >= currentText.length;
    const isFullyDeleted = visibleCount <= 0;

    if (mode === "typing") {
      if (isFullyTyped) {
        const t = window.setTimeout(() => setMode("holding"), holdAfterTypedMs);
        return () => window.clearTimeout(t);
      }
      const t = window.setTimeout(
        () => setVisibleCount((c) => Math.min(currentText.length, c + 1)),
        typingMsPerChar,
      );
      return () => window.clearTimeout(t);
    }

    if (mode === "holding") {
      const t = window.setTimeout(() => setMode("deleting"), holdAfterTypedMs);
      return () => window.clearTimeout(t);
    }

    if (mode === "deleting") {
      if (isFullyDeleted) {
        const t = window.setTimeout(() => {
          setPhraseIndex((i) => (i + 1) % safePhrases.length);
          setMode("typing");
        }, holdAfterDeletedMs);
        return () => window.clearTimeout(t);
      }
      const t = window.setTimeout(
        () => setVisibleCount((c) => Math.max(0, c - 1)),
        deletingMsPerChar,
      );
      return () => window.clearTimeout(t);
    }
  }, [
    currentText,
    deletingMsPerChar,
    holdAfterDeletedMs,
    holdAfterTypedMs,
    mode,
    safePhrases.length,
    typingMsPerChar,
    visibleCount,
  ]);

  useEffect(() => {
    setVisibleCount(0);
    setMode("typing");
  }, [phraseIndex]);

  return (
    <span className={className}>
      <span className={[textClassName, currentPhrase?.className].filter(Boolean).join(" ")}>
        {shown}
      </span>
      <span
        aria-hidden="true"
        className={[
          "ml-0.5 inline-block align-baseline animate-caret",
          cursorClassName,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {cursor}
      </span>
    </span>
  );
}

