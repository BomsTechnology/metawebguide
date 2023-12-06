// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'MetaWebGuide',
      meta: [
        { name: 'description', content: 'A Metawebguide,nous avons une grande expérience en aidant les entreprises et les organisations comme la vôtre à accroître leur présence sur le web,puis à améliorer leur visibilité pour atteindre leurs objectifs.' },
        {
          name: 'keywords', content: 'MetaWebGuide,metawebguide,metaweb,webguide,web,guide,community manager, community management, réseaux sociaux, social media,meta,facebook'
        },
        { name: 'og:type', content: 'website' },
        { name: 'og:title', content: 'MetaWebGuide' },
        { name: 'og:site_name', content: 'MetaWebGuide' },
        { name: 'og:description', content: 'A Metawebguide,nous avons une grande expérience en aidant les entreprises et les organisations comme la vôtre à accroître leur présence sur le web,puis à améliorer leur visibilité pour atteindre leurs objectifs.' },
        { name: 'og:image', content: '/images/webguide.png' },

        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'MetaWebGuide' },
        { name: 'twitter:description', content: 'A Metawebguide,nous avons une grande expérience en aidant les entreprises et les organisations comme la vôtre à accroître leur présence sur le web,puis à améliorer leur visibilité pour atteindre leurs objectifs.' },
        { name: 'twitter:image', content: '/images/webguide.png' },

      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/images/webguide.ico' }
      ]
    }
  },
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss','nuxt-icon'],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config',
    exposeConfig: false,
    exposeLevel: 2,
    config: {},
    injectPosition: 'first',
    viewer: true,
  }
})
