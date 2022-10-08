// Common
import { createContext, useCallback, useContext } from "react";
import { useRouter } from "next/router";

const I18NContext = createContext()

export const I18NProvider = ({ children }) => {
    const { locale } = useRouter()

    const t = useCallback(( key ) => {
        const lang = require(`../../public/locales/${locale}.json`)
        return lang[key]
    }, [locale])

    return (
        <I18NContext.Provider value={{ t }}>
            { children }
        </I18NContext.Provider>
    )
}

export const useI18N = () => {
    const context = useContext(I18NContext)

    if (context === undefined) {
        throw new Error('useI18N must be used within a I18NProvider')
    }

    return context
}