const NextFederationPlugin = require('@module-federation/nextjs-mf');
const { dependencies } = require("./package.json")

module.exports = {
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'counter',
        filename: 'static/chunks/remoteEntry.js',
        remotes: {
          remote: 'remote@http://localhost:3001/remoteEntry.js',
          menu: 'menu@http://localhost:3005/_next/static/chunks/remoteEntry.js'
        },
        exposes: {
          './Box': './src/components/Box',
          './hooks/useCounter': './src/hooks/useCounter',
          './hooks/useTab': './src/hooks/useTab'
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
          automaticAsyncBoundary: true
        },
      }),
    );
    return config;
  },
};

