'use client'
import { useState } from 'react'
import Image from 'next/image'
import styles from './MenuNav.module.css'

export default function MenuNav() {
  const [menuVisible, setMenuVisible] = useState(false)

  const toggleMenu = () => {
    setMenuVisible(!menuVisible)
  }

  return (
    <>
      <button className={styles.hamburguer_btn} onClick={toggleMenu}>
        <Image
          src="/images/menu.svg"
          alt="Botão para abrir o menu de navegação do site."
          width={27}
          height={25}
        />
      </button>
      <nav className={`${styles.menuNav} ${menuVisible ? styles.show : ''}`}>
        <button className={styles.close_btn} onClick={toggleMenu}>
          X
        </button>
        <a
          href="#loja"
          className={styles.link}
          title="Loja"
          onClick={toggleMenu}
        >
          Loja
        </a>
        <a
          href="#login"
          className={styles.link}
          title="Login"
          onClick={toggleMenu}
        >
          Login
        </a>
        <a
          href="#sobre"
          className={styles.link}
          title="Sobre"
          onClick={toggleMenu}
        >
          Sobre
        </a>
        <a
          href="#contato"
          className={styles.link}
          title="Contato"
          onClick={toggleMenu}
        >
          Contato
        </a>
      </nav>
    </>
  )
}
