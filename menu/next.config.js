const NextFederationPlugin = require('@module-federation/nextjs-mf');
const { dependencies } = require("./package.json")

module.exports = {
  webpack(config, options) {
    config.experiments = { ...config.experiments, topLevelAwait: true }
    config.plugins.push(
      new NextFederationPlugin({
        name: 'menu',
        filename: 'static/chunks/remoteEntry.js',
        remotes: {
          counter: 'counter@http://localhost:3002/_next/static/chunks/remoteEntry.js'
        },
        exposes: {
          './Menu': './src/components/Menu'
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
            'styled-components': {
              requiredVersion: dependencies['styled-components'],
              singleton: true,
            },
          }
        ,
        extraOptions: {
          skipSharingNextInternals: true,
          automaticAsyncBoundary: true,
        },
      }),
    );
    return config;
  },
};

