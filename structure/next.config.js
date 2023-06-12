const NextFederationPlugin = require('@module-federation/nextjs-mf');
const { dependencies } = require("./package.json")

module.exports = {
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'structure',
        filename: 'static/chunks/remoteEntry.js',
        remotes: {},
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

