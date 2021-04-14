const handler = {
    '/src/pages/index/index.jsx' ({ pageName }) {
      return { setPageName: `/src/pages/${pageName}/${pageName}.jsx` }
    },
    '/src/pages/index/index.css' ({ pageName}) {
      return { setPageName: `/src/pages/${pageName}/${pageName}.css` }
    }
  }
  
//   const basePageFiles = [
//     '/src/pages/index/index.jsx',
//     '/src/pages/index/index.css'
//   ]
  
  module.exports = {
    handler,
    // basePageFiles
  }