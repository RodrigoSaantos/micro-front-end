var path = require("path");
const { dependencies } = require("./package.json");
const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;

const { override, babelInclude } = require("customize-cra");

module.exports = function (config, env) {
  config.plugins.push(
    new ModuleFederationPlugin(
      (module.exports = {
        name: "portal",
        remotes: {
          remote: 'remote@http://localhost:3001/remoteEntry.js',
          counter: 'counter@http://localhost:3002/_next/static/chunks/remoteEntry.js',
          global_components: 'global_components@http://localhost:3003/_next/static/chunks/remoteEntry.js',
          header: 'header@http://localhost:3004/_next/static/chunks/remoteEntry.js',
          menu: 'menu@http://localhost:3005/_next/static/chunks/remoteEntry.js',
          installation: 'installation@http://localhost:3006/_next/static/chunks/remoteEntry.js',
          structure: 'structure@http://localhost:3007/_next/static/chunks/remoteEntry.js'
        },
        shared: {
          ...dependencies,
          react: {
            singleton: true,
            requiredVersion: dependencies["react"],
          },
          "react-dom": {
            singleton: true,
            requiredVersion: dependencies["react-dom"],
          },
        },
      })
    )
  );
  config.output.publicPath = "auto";
  return Object.assign(
    config,
    override(
      babelInclude([
        /* transpile (converting to es5) code in src/ and shared component library */
        path.resolve("src"),
        path.resolve("../header/src/components"),
        path.resolve("../menu/src/components"),
      ])
    )(config, env)
  );
};
