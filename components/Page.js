import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Page({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Machine Learning Examples</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {children}
      </main>
    </div>
  )
}
