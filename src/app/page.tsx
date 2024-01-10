import Image from 'next/image'
import styles from './Home.module.css'

export default function Home() {
  return (
    <main className={styles.main__container}>
      <section className={styles.banners__section}>
        <figure className={styles.firstBannerContainer}>
          <Image
            className={styles.firstBanner}
            src="/images/banners/firstBanner.svg"
            alt="Logo da Empresa"
            width={379.91}
            height="235"
          />
          <Image
            className={styles.secondBanner}
            src="/images/banners/secondBanner.svg"
            alt="Logo da Empresa"
            width={379.91}
            height="235"
          />
        </figure>
        <figure className={styles.thirdBannerContainer}>
          <Image
            className={styles.thirdBanner}
            src="/images/banners/thirdBanner.svg"
            alt="Logo da Empresa"
            width={378.83}
            height="500"
          />
        </figure>
        <figure className={styles.lastBannerContainer}>
          <Image
            className={styles.fourthBanner}
            src="/images/banners/fourthBanner.svg"
            alt="Logo da Empresa"
            width={379.91}
            height="235"
          />
          <Image
            className={styles.fifthBanner}
            src="/images/banners/fifthBanner.svg"
            alt="Logo da Empresa"
            width={379.91}
            height="235"
          />
        </figure>
      </section>
      <section className={styles.products__section}>
        <h1 className={styles.title}>Oportunidades para economizar</h1>
        <div className={styles.mainStripe}>
          <div className={styles.midStripe}></div>
        </div>
        <ul className={styles.productList}>
          <li className={styles.productCard}></li>
        </ul>
      </section>
    </main>
  )
}
