import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Page from "../components/Page";

const Card = ({ title, desc, href }) => (
  <a href={href} className={styles.card}>
    <h3>{title}</h3>
    <p>{desc}</p>
  </a>
);

export default function Home() {
  return (
    <Page>
      <h1 className={styles.title}>Machine Learning</h1>

      <p className={styles.description}>Machine learning examples</p>

      <div className={styles.grid}>
        <Card
          title="Increment &rarr;"
          desc="State of the art machine learning counting service"
          href="/increment"
        />

        <Card
          title="Doubling &rarr;"
          desc="Machine learning powered function that doubles numbers"
          href="/double"
        />
      </div>
    </Page>
  )
}
