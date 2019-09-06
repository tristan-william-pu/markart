// import vue from 'vue'
// import vuei18n from 'vue-i18n'

// vue.use(vuei18n)

// function loadlocalemessages () {
//   const locales = require.context('./locales', true, /[a-za-z0-9-_,\s]+\.json$/i)
//   const messages = {}
//   locales.keys().foreach(key => {
//     const matched = key.match(/([a-za-z0-9-_]+)\./i)
//     if (matched && matched.length > 1) {
//       const locale = matched[1]
//       messages[locale] = locales(key)
//     }
//   })
//   return messages
// }

// export default new vuei18n({
//   locale: process.env.vue_app_i18n_locale || 'en',
//   fallbacklocale: process.env.vue_app_i18n_fallback_locale || 'en',
//   messages: loadlocalemessages()
// })
