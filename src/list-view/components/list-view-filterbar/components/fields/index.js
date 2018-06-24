import camelCase from 'lodash/camelCase'

// 导入本目录下所有以 `field` 开头的 .vue 文件
const requireFiles = require.context('.', true, /(^\.\/field)(.+)(\.vue$)/)
const fields = {}

requireFiles.keys().forEach(fileName => {
  // 以驼峰命名作为 key 名存储
  const componentName = camelCase(
    fileName.replace(/^\.\//, '').replace(/\.\w+$/, '')
  )

  fields[componentName] = requireFiles(fileName).default
})

export default fields
