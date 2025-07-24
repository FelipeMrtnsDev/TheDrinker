import { useEffect, useState } from "react";

export const TypingText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, delay + currentIndex * 1.5)
      return () => clearTimeout(timer)
    }
  }, [currentIndex, text, delay])

  return <span>{displayText}<span className="animate-pulse">|</span></span>
}