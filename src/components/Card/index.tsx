import Image from 'next/image'
import React from 'react'
import styles from './Card.module.css'

interface IProps {
  id: number
  img: string
  description: string
  price: string
  salePrice: string
  installments: string
}

const Card: React.FC<IProps> = ({
  id,
  img,
  description,
  price,
  salePrice,
  installments,
}) => {
  return (
    <li className={styles.card}>
      <figure className={styles.image__container}>
        <Image
          className={styles.imgCard}
          src={img}
          alt={`Imagem do produto ${id}`}
          width={260}
          height="260"
        />
      </figure>
      <p className={styles.description}>{description}</p>
      <p className={styles.fullPrice}>{price}</p>
      <p className={styles.actualPrice}>{salePrice}</p>
      <p className={styles.installments}>{installments}</p>
      <button className={styles.btnAddToCart}>Adicionar ao carrinho</button>
    </li>
  )
}

export default Card
