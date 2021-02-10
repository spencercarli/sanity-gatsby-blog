export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '602456f52320535d4f24f864',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-uywi5vb6',
                  apiId: 'ec242045-65c8-40d5-8223-f58b358548b5'
                },
                {
                  buildHookId: '602456f531b3404e13ba699f',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-4de694fx',
                  apiId: 'c283c78a-2c41-429b-9cc6-24d051ee7b91'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/spencercarli/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-4de694fx.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
