import styles from './Home.module.css'
import Card from '@/components/Card'
import { data } from '@/database/data'
import BannerSection from '@/components/BannerSection'

export default function Home() {
  return (
    <main className={styles.mainContainer}>
      <BannerSection />
      <section className={styles.productsSection}>
        <h1 className={styles.title}>Oportunidades para economizar</h1>
        <div className={styles.mainStripe}>
          <div className={styles.midStripe}></div>
        </div>
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
      </section>
    </main>
  )
}
