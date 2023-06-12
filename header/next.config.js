const NextFederationPlugin = require('@module-federation/nextjs-mf');
const { dependencies } = require("./package.json")

module.exports = {
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'header',
        filename: 'static/chunks/remoteEntry.js',
        remotes: {
          global_components: 'global_components@http://localhost:3003/_next/static/chunks/remoteEntry.js',
        },
        exposes: {
          './Header': './src/components/Header'
        },
        shared: 
          {
            react: {
              requiredVersion: dependencies['react'],
              singleton: true,
            },
            'react-dom': {
              requiredVersion: dependencies['react-dom'],
              singleton: true,
            },
          }
        ,
        extraOptions: {
          skipSharingNextInternals: true,
          automaticAsyncBoundary: true,
          enableImageLoaderFix: true,
          enableUrlLoaderFix: true,
        },
      }),
    );
    return config;
  },
};

