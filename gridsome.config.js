// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'rdev_portal',
  plugins: [
    {
      use: "gridsome-plugin-i18n",
      options: {
        locales: [ // 所有支持的语言环境的列表。
          'zh-CN',
          'en-US'
        ],
        pathAliases: { // 设置别名
          'zh-CN': 'zh',
          'en-US': 'en'
        },
        fallbackLocale: 'zh-CN', // fallback language
        defaultLocale: 'zh-CN', // 默认语言
        enablePathRewrite: true, // 用区域设置前缀重写路径，默认 true
        rewriteDefaultLanguage: true, // rewrite default locale, default: true
        messages: {}
      }
    },
    // {
    //   use: "@gridsome/source-filesystem",
    //   options: {
    //     path: "blog/*.md",
    //     typeName: "Stack",
    //   }
    // },
  ],
  transformers: {
    remark: {
      plugins: [
        '@gridsome/remark-prismjs'
      ]
    }
  }
}
