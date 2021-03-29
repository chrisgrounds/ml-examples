import styles from '../styles/Home.module.css'
import Page from "../components/Page";

export default function Double() {
  return (
    <Page>
      <h1 className={styles.title}>Double</h1>

      <p className={styles.description}>Machine learning powered function that doubles numbers</p>

      <p className={styles.description}>Model coming soon...</p>
    </Page>
  )
}