// Common
import { createContext, useCallback, useContext, useMemo } from "react";

const I18NContext = createContext()

export const I18NProvider = ({ locale, children }) => {

    if (locale === undefined) {
        throw new Error('I18NProvider need receive a "locale" prop.')
    }

    const lang = useMemo(() => require(`../../public/locales/${locale}.json`), [locale])

    const t = useCallback(( key ) => lang[key], [locale])

    return (
        <I18NContext.Provider value={{ t }}>
            { children }
        </I18NContext.Provider>
    )
}

export const useI18N = () => {
    const context = useContext(I18NContext)

    if (context === undefined) {
        throw new Error('useI18N must be used within a I18NProvider.')
    }

    return context
}