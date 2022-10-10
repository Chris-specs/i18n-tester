import { I18NProvider } from '@context/i18n'
import { useRouter } from 'next/router';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

    const { locale } = useRouter()

    return (
        <I18NProvider locale={ locale }>
            <Component {...pageProps} />
        </I18NProvider>
    )
}

export default MyApp
