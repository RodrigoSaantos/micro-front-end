const NextFederationPlugin = require('@module-federation/nextjs-mf');

module.exports = {
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'counter',
        filename: 'static/chunks/remoteEntry.js',
        remotes: {},
        exposes: {
          './Box': './src/components/Box',
          './hooks/useCounter': './src/hooks/useCounter'
        },
        shared: 
          {
            react: {
              requiredVersion: false,
              singleton: true,
            },
          }
        ,
        extraOptions: {
          skipSharingNextInternals: true,
          automaticAsyncBoundary: true
        },
      }),
    );
    return config;
  },
};

