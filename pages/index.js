import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout';

console.log('fromIndex');

export default function Home() {
  return (
    <div className={styles.container}>

      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Dapp generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <h1 className={styles.title}>
          Portfolio Dapp
        </h1>

        <p className={styles.description}>
          My Portfolio 
        </p>

        <Layout> </Layout>

      </main>

      <footer className={styles.footer}>Portfolio</footer>
    </div>
  )
}
