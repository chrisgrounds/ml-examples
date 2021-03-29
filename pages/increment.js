import styles from '../styles/Home.module.css'
import Page from "../components/Page";

export default function Increment() {
  return (
    <Page>
      <h1 className={styles.title}>Increment</h1>

      <p className={styles.description}>State of the art machine learning counting service</p>
    </Page>
  )
}