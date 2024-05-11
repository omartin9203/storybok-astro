//You can have the languages in an utils file so it can be reused.
const languages = ['es', 'es-mx']

const defaultLanguage = 'es'

function getTransLink(language, slug) {
    return language === defaultLanguage ? slug : `/${language}${slug}`
}

export {
    getTransLink,
    languages,
    defaultLanguage
}