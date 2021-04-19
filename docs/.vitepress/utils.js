const fs = require('fs')
const path = require('path')

// TODO: 过于耦合，待解耦
function getChildrenPlugins(source) {
  const children = []
  const files = fs
    .readdirSync(path.resolve(path.join(__dirname, source)))
    .map(filename => `${source}/${filename}`)

  const iterate = _path => {
    const absolutePath = path.isAbsolute(_path) ? _path : path.resolve(_path)
    const stat = fs.statSync(absolutePath)

    if (stat.isFile()) {
      const parent = path.basename(path.dirname(_path)).replace(/^\w+(?=-)/, '').replace('-', '')

      const child = children.find(child => child.text === parent)
      if (child) {
        child.children = child.children || []
        child.children.push({
          text: path.basename(_path).replace('.md', '').replace(/^\w+(?=-)/, '').replace('-', ''),
          link: path.relative('./', _path).replace('docs', '').replace('.md', '')
        })
      } else {
        children.push({
          text: path.basename(_path).replace('.md', ''),
          link: path.relative('./', _path).replace('docs', '').replace('.md', '').replace(/^\w+(?=-)/, '').replace('-', '')
        })
      }
    } else {
      const temp = path.resolve(_path)
      const files = fs.readdirSync(temp)

      children.push({
        text: path.basename(temp).replace('.md', '').replace(/^\w+(?=-)/, '').replace('-', ''),
        children: []
      })

      files.forEach(file => {
        iterate(`${temp}/${file}`)
      })
    }
  }

  files.forEach(file => {
    iterate(path.resolve(path.join(__dirname, file)))
  })

  console.log(JSON.stringify(children))
  return children;
}

module.exports = {
  getChildrenPlugins
}

getChildrenPlugins('../前端基础/JavaScript')

