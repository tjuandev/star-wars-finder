'use client'
import S from './styles.module.scss'
import { useState } from 'react'
import type { AccordionProps } from './types'
import { ChevronIcon } from 'components/atoms'
import clsx from 'clsx'

export const Accordion = ({ title, children, onOpen }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={S.accordion}>
      <button
        className={S.accordion_header}
        onClick={() => {
          setIsOpen(prevState => {
            const newState = !prevState

            if (newState) {
              onOpen?.()
            }

            return newState
          })
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
