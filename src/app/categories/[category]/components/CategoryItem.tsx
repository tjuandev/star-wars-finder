import { Badge } from 'components/atoms'
import { Accordion } from 'components/molecules'
import { usePopularSearches } from 'store/popularSearchesSlice'
import type { CategoryProps } from '../types'
import S from '../styles.module.scss'

const SMALL_BADGE_LENGTH = 50

interface AccordionTitleProps {
  id?: string
  name?: string
  title?: string
}

const AccordionTitle = ({ id, name, title }: AccordionTitleProps) => (
  <p className={S.accordion_title}>
    #{id}
    <strong>{name || title}</strong>
  </p>
)

export const CategoryItem = ({
  details = {},
  id,
  name,
  title,
  category
}: CategoryProps) => {
  const { addToRanking } = usePopularSearches()

  const contentAdapted = Object.entries(details).map(([key, value]) => {
    const hasHugeText = value.length > SMALL_BADGE_LENGTH

    return (
      <Badge key={key} hugeText={hasHugeText}>
        <p className={S.badge_content}>
          <strong>{key.replaceAll('_', ' ')}</strong>: {value}
        </p>
      </Badge>
    )
  })

  return (
    <Accordion
      key={name}
      onOpen={() => {
        addToRanking({ category, id })
      }}
      title={<AccordionTitle id={id} name={name} title={title} />}
    >
      <div className={S.accordion_badges}>{contentAdapted}</div>
    </Accordion>
  )
}
