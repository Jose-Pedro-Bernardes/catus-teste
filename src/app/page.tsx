import styles from './Home.module.css'
import Card from '@/components/Card'
import { data } from '@/database/data'
import BannerSection from '@/components/BannerSection'

export default function Home() {
  return (
    <main className={styles.main__container}>
      <BannerSection />
      <section className={styles.products__section}>
        <h1 className={styles.title}>Oportunidades para economizar</h1>
        <div className={styles.mainStripe}>
          <div className={styles.midStripe}></div>
        </div>
        <div className={styles.overflow__container}>
          <ul className={styles.productList}>
            {data.map((product) => (
              <Card
                key={product.id}
                id={product.id}
                img={product.img}
                description={product.description}
                price={product.price}
                salePrice={product.salePrice}
                installments={product.installments}
              />
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}
