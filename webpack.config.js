const configEntry = path.resolve(__dirname, './src/index.tsx')

const configResolve = {
  extensions: ['.js', '.ts', '.tsx', '.jsx', '.css', '.html'],
}

const prodConfig = {
  target: 'node',

  mode: 'production',
  entry: configEntry,
  //   plugins,
  //   output: {
  //     path: path.resolve(__dirname, 'dist/public'),
  //     filename: '[name].[contenthash].bundle.js',
  //   },
  //   optimization: {
  //     splitChunks: {
  //       cacheGroups: {
  //         common: {
  //           test: /[\\/]node_modules[\\/]((?!react).*)[\\/]/,
  //           name: 'common',
  //           chunks: 'all',
  //         },
  //         react: {
  //           test: /[\\/]node_modules[\\/]((react).*)[\\/]/,
  //           name: 'react',
  //           chunks: 'all',
  //         },
  //       },
  //     },
  //   },
  //   module: configModule,
  resolve: configResolve,
}

const devConfig = {
  target: 'node',
  mode: 'development',
  entry: configEntry,
  //   output: {
  //     path: path.resolve(__dirname, 'dist/public'),
  //     filename: 'main.bundle.js',
  //   },
  //   plugins,
  //   module: configModule,
  resolve: configResolve,
  //   devServer: {
  //     historyApiFallback: true,
  //     hot: true, //turns on hot module reloading capability so when we change src it reloads the module we changed, thus causing a react rerender!
  //     port: 9000,
  //     client: {
  //       progress: true,
  //       overlay: true,
  //       logging: 'info', //give us all info logged to client when in local dev mode
  //     },
  //     static: {
  //       publicPath: '/',
  //       directory: path.join(__dirname, 'dist/public'),
  //     },
  //   },
}

module.exports = (env, argv) => (argv.mode === 'production' ? prodConfig : devConfig)
