import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "BuildingGen",
  description: "description",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/Examples' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          
          { text: 'What is BuildingGen' , link:'/What-it-is'},
          { text: 'What is Houdini', link: '/what-is-houdini'},
          { text: 'Some Examples', link: '/Examples'}
          
        ]
      },

      {
        text: 'How to use',
        items: [
          {text:'Quickstart Guide', link:'/quickstart-guide'},
          {text:'Parameters', link:'/hda-parameters'},
          {text:'Adding new content', link:'/add-new-items'},
          {text:'Understanding the pattern grammar', link:'/how-it-works'},
          {text:'Asset preperation', link:'/asset-prepare'}
        ]
      },
    
      {
        text: 'Houdini Setup',
        items: [
          {text: 'Houdini Setup', link: '/houdini-setup'}
        ]
      },


    ],


    socialLinks: [
      { icon: 'github', link: 'https://github.com/nnesdi/docs' }
    ]
  }
})
