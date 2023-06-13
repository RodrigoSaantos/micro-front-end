const NextFederationPlugin = require('@module-federation/nextjs-mf');

module.exports = {
  compiler: {
    styledComponents: true,
  },
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'global_components',
        filename: 'static/chunks/remoteEntry.js',
        remotes: {},
        exposes: {
          './components/Button': './src/components/Button',
          './components/Breadcrumb': './src/components/Breadcrumb',
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

