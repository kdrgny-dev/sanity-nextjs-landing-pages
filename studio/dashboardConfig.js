export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '601b1307f69c1a0c0ca729c7',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-k8uo3xg4',
                  apiId: '7e5b3b4f-b22c-4daa-8bf8-c6cd5cc09648'
                },
                {
                  buildHookId: '601b1308a8a0270e49660b41',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-eajm2ir9',
                  apiId: '130d2b63-93c3-4798-848c-1129102c0869'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kdrgny-dev/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-eajm2ir9.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
