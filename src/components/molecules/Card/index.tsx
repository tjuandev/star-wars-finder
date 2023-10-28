import S from './styles.module.scss'
import type { CardProps } from './types'
import Image from 'next/image'

export const Card = ({ alt, src, title, imgHeight, imgWidth }: CardProps) => (
  <button className={S.container} type="button">
    <div className={S.card}>
      <Image
        src={src}
        alt={alt}
        className={S.img}
        width={imgWidth}
        height={imgHeight}
      />
    </div>
    <h5 className={S.title}>{title}</h5>
  </button>
)
