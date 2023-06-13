const NextFederationPlugin = require('@module-federation/nextjs-mf');
const { dependencies } = require("./package.json")

module.exports = {
  webpack(config, options) {
    config.experiments = { ...config.experiments, topLevelAwait: true }
    config.plugins.push(
      new NextFederationPlugin({
        name: 'structure',
        filename: 'static/chunks/remoteEntry.js',
        remotes: {
          counter: 'counter@http://localhost:3002/_next/static/chunks/remoteEntry.js',
          global_components: 'global_components@http://localhost:3003/_next/static/chunks/remoteEntry.js',
        },
        exposes: {
          './Structure': './src/components/Structure',
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
        },
      }),
    );
    return config;
  },
};

