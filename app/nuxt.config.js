module.exports = {
    head: {
      titleTemplate: 'Website Title',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Meta description' }
      ]
    },
    extendRoutes (nuxtRoutes, resolve) {
        nuxtRoutes.splice(0, nuxtRoutes.length, ...routes.map((route) => {
            return { ...route, component: resolve(__dirname, route.component) }
        }))
    }
}