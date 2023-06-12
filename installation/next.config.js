const NextFederationPlugin = require('@module-federation/nextjs-mf');
const { dependencies } = require("./package.json")

module.exports = {
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'installation',
        filename: 'static/chunks/remoteEntry.js',
        remotes: {},
        exposes: {
          './Installation': './src/components/Installation',
          './Introduction': './src/components/Introduction'
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

