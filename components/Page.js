import Head from 'next/head'
import styles from '../styles/Page.module.css'

const Page = ({ justifyStart, children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Machine Learning Examples</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${justifyStart ? styles.content__page : styles.main}`}>
        {children}
      </main>
    </div>
  )
}

const ContentPage = ({ children }) => <Page justifyStart={true}>{children}</Page>

export default Page;
export { ContentPage };
