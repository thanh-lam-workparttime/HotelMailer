module.exports = {
  apps: [
    {
      name: 'backend',
      script: './dist/main.js',
      watch: false,
      node_args: "--max-http-header-size=80000",
    }
  ]
}
