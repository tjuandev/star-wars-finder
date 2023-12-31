'use client'
import S from './styles.module.scss'
import { useEffect, useState } from 'react'
import type { AccordionProps } from './types'
import { ChevronIcon } from 'components/atoms'
import clsx from 'clsx'

export const Accordion = ({ title, children, onOpen }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      onOpen?.()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen])

  return (
    <div className={S.accordion}>
      <button
        className={S.accordion_header}
        onClick={() => {
          setIsOpen(!isOpen)
        }}
        aria-label={isOpen ? 'Open' : 'Close'}
        aria-expanded={isOpen}
      >
        {title}
        <ChevronIcon className={clsx(S.accordion_icon, isOpen && S.open)} />
      </button>
      <div className={clsx(S.accordion_content, isOpen && S.open)}>
        {isOpen && children}
      </div>
    </div>
  )
}
