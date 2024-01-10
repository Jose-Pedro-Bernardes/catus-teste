import Image from 'next/image'
import React from 'react'
import styles from './InputSection.module.css'

export default function InputSection() {
  return (
    <form className={styles.inputSearch__container}>
      <input
        // value={search}
        className={styles.searchInput}
        // onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="O que você está procurando?"
      />
      <button type={'button'} className={styles.buttonSearch}>
        {' '}
        <Image
          src={'/images/lupa.svg'}
          alt="Pesquisar produto."
          width={20}
          height={20}
          layout="responsive"
        />
      </button>
    </form>
  )
}
