import Image from 'next/image'
import styles from "./Header.module.css"
import React from 'react'
import MenuNav from './MenuNav'


export default function Header() {
  return (
    <header className={styles.header__container}>
      <div className={styles.alignGrid}>
        <figure className="logoContainer">
          <Image
            src="/images/logoCatus.svg"
            alt="Logo da Empresa"
            width="176"
            height="54"
          />
        </figure>
        <MenuNav />
        <MenuNav />
      </div>
    </header>
  )
}
