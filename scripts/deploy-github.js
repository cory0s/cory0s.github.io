const ghpages = require('gh-pages')

// replace with your repo url
ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'https://github.com/cory0s/cory0s.github.io.git',
  },
  () => {
    console.log('Deploy Complete!')
  }
)