export const state = () => ({
  links: {
    social: {
      visaolibertaria: 'https://youtube.com/c/Vis%C3%A3oLibert%C3%A1riaAncapSu',
      youtube: 'https://youtube.com/c/ANCAPSUVlog',
      twitter: 'https://twitter.com/ancapsu',
      facebook: 'https://facebook.com/pageancapsu',
      bitchute: 'https://bitchute.com/channel/visaolibertaria',
      gab: 'https://gab.ai/ancapsu',
      minds: 'https://minds.com/ancapsu'
    },
    donation: {
      padrim: 'https://padrim.com.br/ancapsu',
      patreon: 'https://patreon.com/ancapsu',
      apoiase: 'https://apoia.se/ancapsu'
    },
    store: {
      mug: 'https://apoio.ancap.su/caneca-ancapsu',
      shirt: 'https://apoio.ancap.su/camiseta-ancapsu'
    },
    emails: { primary: 'ancapsu@gmail.com' }
  },
  internalNavItems: {
    video: {
      text: 'Vídeos',
      to: {
        name: 'category-filter',
        params: { category: 'video', filter: 'all' }
      },
      items: [
        {
          text: 'Teoria libertária',
          to: {
            name: 'category-filter',
            params: { category: 'video', filter: 'theory' }
          }
        },
        {
          text: 'Visão libertária',
          to: {
            name: 'category-filter',
            params: { category: 'video', filter: 'news' }
          }
        },
        {
          text: 'Cômicos',
          to: {
            name: 'category-filter',
            params: { category: 'video', filter: 'comic' }
          }
        },
        {
          text: 'Procurar',
          to: {
            name: 'category-filter',
            params: { category: 'video', filter: 'search' }
          }
        }
      ]
    },
    matter: {
      text: 'Metérias',
      to: {
        name: 'category-filter',
        params: { category: 'matter', filter: 'all' }
      },
      items: [
        {
          text: 'Artigos',
          to: {
            name: 'category-filter',
            params: { category: 'matter', filter: 'article' }
          }
        },
        {
          text: 'Tapas',
          to: {
            name: 'category-filter',
            params: { category: 'matter', filter: 'shortnote' }
          }
        },
        {
          text: 'Crônicas',
          to: {
            name: 'category-filter',
            params: { category: 'matter', filter: 'chronicle' }
          }
        },
        {
          text: 'Procurar',
          to: {
            name: 'category-filter',
            params: { category: 'matter', filter: 'search' }
          }
        }
      ]
    },
    schedule: {
      text: 'Pautas',
      to: {
        name: 'category-filter',
        params: { category: 'schedule', filter: 'all' }
      },
      items: [
        {
          text: 'Últimas pautas',
          to: {
            name: 'category-filter',
            params: { category: 'schedule', filter: 'news' }
          }
        },
        {
          text: 'Procurar',
          to: {
            name: 'category-filter',
            params: { category: 'schedule', filter: 'search' }
          }
        }
      ]
    },
    other: {
      text: 'Sobre',
      to: { name: 'about' },
      items: [
        {
          text: 'Ajuda',
          to: { name: 'help' }
        }
      ]
    }
  }
})

export const getters = {
  email({ links }) {
    return (email) =>
      `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${email ||
        links.emails.primary}&tf=1`
  }
}

export const mutations = {}

export const actions = {}
