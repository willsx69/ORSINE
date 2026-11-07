"use client"

import { useEffect, useMemo, useState } from "react"
import { useReducedMotion } from "framer-motion"

import { cn } from "@/lib/utils"

type TypingTag = "span" | "div" | "p" | "h1" | "h2"

interface TypingAnimationProps {
  text: string
  /** Tempo por caractere, em milissegundos @default 90 */
  duration?: number
  /** Atraso antes de começar a digitar, em segundos @default 0 */
  delay?: number
  as?: TypingTag
  /** Esconde o cursor depois de terminar de digitar @default true */
  hideCaret?: boolean
  className?: string
}

/**
 * Typing Animation
 *
 * Digita o texto caractere por caractere automaticamente, com cursor piscando.
 */
export function TypingAnimation({
  text,
  duration = 90,
  delay = 0,
  as: Tag = "span",
  hideCaret = true,
  className,
}: TypingAnimationProps) {
  const chars = useMemo(() => Array.from(text), [text])
  const prefersReducedMotion = useReducedMotion() ?? false
  const [typedCount, setTypedCount] = useState(0)

  useEffect(() => {
    if (prefersReducedMotion) {
      setTypedCount(chars.length)
      return
    }

    let index = 0
    let charTimer: ReturnType<typeof setTimeout>

    const startTimer = setTimeout(function typeNextChar() {
      index += 1
      setTypedCount(index)
      if (index < chars.length) {
        charTimer = setTimeout(typeNextChar, duration)
      }
    }, delay * 1000)

    return () => {
      clearTimeout(startTimer)
      clearTimeout(charTimer)
    }
  }, [chars, duration, delay, prefersReducedMotion])

  const done = typedCount >= chars.length

  return (
    <Tag className={cn("inline", className)}>
      {chars.slice(0, typedCount).join("")}
      {!done || !hideCaret ? (
        <span
          aria-hidden
          className="motion-reduce:hidden ml-px inline-block h-[0.85em] w-[3px] translate-y-[0.08em] animate-caret rounded-full bg-gold align-baseline"
        />
      ) : null}
    </Tag>
  )
}
