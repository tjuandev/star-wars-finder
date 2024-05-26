import S from './styles.module.scss'
import type { CardProps } from './types'
import Image from 'next/image'
import Link from 'next/link'

export const Card = ({
  alt,
  src,
  title,
  imgHeight,
  imgWidth,
  href,
  dataCy
}: CardProps) => (
  <Link href={href} className={S.container} data-cy={dataCy}>
    <div className={S.card}>
      <Image
        src={src}
        alt={alt}
        className={S.img}
        width={imgWidth}
        height={imgHeight}
        priority
      />
    </div>
    <h5 className={S.title}>{title}</h5>
  </Link>
)
