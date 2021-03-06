import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout';

console.log('fromIndex');

export default function Home() {
  return (
    <div className={styles.container}>

      <Head>
        <title>Portfolio Hico</title>
        <meta name="My portfolio with the integration of blokchain technology Ethereum" content="Dapp generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <h1 className={styles.title}>
          Portfolio Dapp
        </h1>

        <p className={styles.description}>
          To display and feature my current, past and future work pertaining blokchain technology.
        </p>

        <Layout> </Layout>

      </main>

      <footer className={styles.footer}>Portfolio</footer>
    </div>
  )
}
