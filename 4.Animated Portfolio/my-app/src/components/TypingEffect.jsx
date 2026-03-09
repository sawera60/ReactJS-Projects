import React, { useEffect, useState } from "react";

const TypingEffect = ({
  text = [],
  Speed = 100,
  eraseSpeed = 50,
  eraseDelay = 1000,
  typingDelay = 500,
  cursor = "|",
}) => {
  const words = Array.isArray(text) ? text : [];
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    if (words.length === 0) return;

    const currentWord = words[wordIndex % words.length];
    let timeout;

    if (!isDeleting && charIndex <= currentWord.length) {
      setDisplayText(currentWord.slice(0, charIndex));
      timeout = setTimeout(() => setCharIndex((prev) => prev + 1), Speed);
    } else if (isDeleting && charIndex >= 0) {
      setDisplayText(currentWord.slice(0, charIndex));
      timeout = setTimeout(() => setCharIndex((prev) => prev - 1), eraseSpeed);
    } else if (!isDeleting && charIndex > currentWord.length) {
      timeout = setTimeout(() => setIsDeleting(true), eraseDelay);
    } else {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
      timeout = setTimeout(() => setCharIndex(0), typingDelay);
    }

    return () => clearTimeout(timeout);
  }, [
    charIndex,
    eraseDelay,
    eraseSpeed,
    isDeleting,
    Speed,
    typingDelay,
    wordIndex,
    words,
  ]);

  return (
    <span>
      {displayText}
      <span>{cursor}</span>
    </span>
  );
};

export default TypingEffect;
