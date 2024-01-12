import Image from 'next/image'
import styles from './Header.module.css'
import React from 'react'
import MenuNav from './MenuNav'
import InputSection from './InputSection'

export default function Header() {
  return (
    <header className={styles.header__container}>
      <div className={styles.alignGrid}>
        <figure className="logoContainer">
          <Image
            className={styles.logo}
            src="/images/seals/logoCatus.svg"
            alt="Logo da Empresa"
            width="176"
            height="54"
          />
        </figure>
        <MenuNav />
        <InputSection />
        <button className={styles.cartBtn}>
          <Image
            src="/images/vector/cart.svg"
            alt="Carrinho de compras."
            width={20}
            height={20}
            layout="responsive"
          />
        </button>
      </div>
    </header>
  )
}
