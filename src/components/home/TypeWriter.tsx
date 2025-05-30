import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function TypeWriter() {
  const { t } = useTranslation();
  const words: string[] = t("home.typewriter", { returnObjects: true }) as string[];

  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex] || "";
    const timeout = setTimeout(
      () => {
        if (deleting) {
          setText(currentWord.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setText(currentWord.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }

        if (!deleting && charIndex === currentWord.length) {
          setTimeout(() => setDeleting(true), 1000);
        }

        if (deleting && charIndex === 0) {
          setDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      },
      deleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex]);

  return (
    <h2 className="text-purple-500 font-mono  text-2xl md:text-3xl font-semibold min-h-[2.5rem]">
      {text}
      <span className="border-r-2 border-purple-500 animate-pulse ml-1" />
    </h2>
  );
}
