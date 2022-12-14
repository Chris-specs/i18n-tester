import { useI18N } from '@context/i18n'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'

export default function Home() {

    const { asPath, locale } = useRouter()
    const { t } = useI18N()
    
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    {t('welcome')} <a href="https://nextjs.org">Next.js!</a>
                </h1>

                <p className={styles.description}>
                    {t('get_started')}{' '}
                    <code className={styles.code}>pages/index.js</code>
                </p>

                {
                    locale === 'en'
                        ? <Link href={asPath} locale='es'>
                            <a className={styles.card}>Español</a>
                          </Link>
                        : <Link href={asPath} locale='en'>
                            <a className={styles.card}>English</a>
                          </Link>
                }
                
            </main>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <span className={styles.logo}>
                        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                    </span>
                </a>
            </footer>
        </div>
    )
}
