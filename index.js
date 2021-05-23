const { path } = require('@vuepress/shared-utils')

module.exports = (options, ctx) => ({
  define() {
    const { title, width, body, footer, top, right, bottom } = options || {}
    return {
      WIDTH: width || '200px',
      TOP: top || '80px',
      BOTTOM: bottom || 'none',
      RIGHT: right || '0',
      TITLE: title || '扫一扫',
      BODY: body || [],
      FOOTER: footer || [],
    }
  },
  name: 'vuepress-plugin-notify',
  enhanceAppFiles: [path.resolve(__dirname, './bin/enhanceAppFile.js')],
  globalUIComponents: 'Notify',
})
