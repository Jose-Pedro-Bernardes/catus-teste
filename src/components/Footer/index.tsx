import React from 'react'
import styles from './Footer.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.alignFooter}>
        <section className={styles.contactSection}>
          <h3 className={styles.footerTitle}>Central de Atendimento</h3>
          <div className={styles.stripeHeader}>
            <div className={styles.stripeComplement}></div>
          </div>
          <nav className={styles.navigate}>
            <Link className={styles.linkNavFooter} href="#">
              Ajuda e suporte
            </Link>
            <Link className={styles.linkNavFooter} href="#">
              Fale conosco
            </Link>
            <Link className={styles.linkNavFooter} href="#">
              Faq
            </Link>
          </nav>

          <p className={styles.whatsapp}>Whatsapp: (11) 99999-9999</p>

          <div className={styles.hourContainer}>
            <h4 className={styles.hourTitle}>Nossos horários</h4>
            <p className={styles.hour}>Segunda a sexta das 9h às 18h</p>
          </div>
        </section>
        <div className={styles.alignSection}>
          <section className={styles.sealSection}>
            <h3 className={styles.footerTitle}>Selos de Segurança</h3>
            <div className={styles.stripeHeader}>
              <div className={styles.stripeComplement}></div>
            </div>
            <figure className={styles.sealContainer}>
              <Image
                className={styles.imgFooter}
                src="/images/seals/seloGoogle.svg"
                alt="Selo do google"
                width={146.03}
                height={37}
              />
              <Image
                className={styles.imgFooter}
                src="/images/seals/seloLojaProtegida.svg"
                alt="Loja protegida"
                width={130}
                height={38}
              />
            </figure>
          </section>
          <section className={styles.paymentSection}>
            <h3 className={styles.footerTitle}>Formas de Pagamento</h3>
            <div className={styles.stripeHeader}>
              <div className={styles.stripeComplement}></div>
            </div>
            <figure>
              <Image
                className={styles.imgFooter}
                src="/images/seals/formasDePagamento.svg"
                alt="formas de pagamento"
                width={338}
                height={32}
              />
            </figure>
          </section>
        </div>
      </div>
    </footer>
  )
}
