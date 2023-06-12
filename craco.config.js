const { whenProd } = require("@craco/craco");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const path = require("path");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const LoadablePlugin = require("@loadable/webpack-plugin");

const allBuilds = [new NodePolyfillPlugin(), new LoadablePlugin()];

function getFileLoaderRule(rules) {
  for (const rule of rules) {
    if ("oneOf" in rule) {
      const found = getFileLoaderRule(rule.oneOf);
      if (found) {
        return found;
      }
    } else if (rule.test === undefined && rule.type === "asset/resource") {
      return rule;
    }
  }
}

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src/"),
    },
    plugins:
      process.env.ANALYZER === "check"
        ? [...allBuilds, new BundleAnalyzerPlugin()]
        : allBuilds,

    configure: (webpackConfig) => {
      webpackConfig.resolve.fallback = {
        ...webpackConfig.resolve.fallback,
        fs: false,
      };
      webpackConfig.ignoreWarnings = [
        function ignoreSourcemapsloaderWarnings(warning) {
          return (
            warning.module &&
            warning.module.resource.includes("node_modules") &&
            warning.details &&
            warning.details.includes("source-map-loader")
          );
        },
      ];

      // Handle axios 1 bug.
      // https://github.com/facebook/create-react-app/issues/11889
      const fileLoaderRule = getFileLoaderRule(webpackConfig.module.rules);
      if (!fileLoaderRule) {
        throw new Error("File loader not found");
      }
      fileLoaderRule.exclude.push(/\.cjs$/);

      const scopePluginIndex = webpackConfig.resolve.plugins.findIndex(
        ({ constructor }) =>
          constructor && constructor.name === "ModuleScopePlugin"
      );

      webpackConfig.resolve.plugins.splice(scopePluginIndex, 1);

      return webpackConfig;
    },
  },
  babel: {
    plugins: [
      ...whenProd(
        () => [
          [
            "react-remove-properties",
            {
              properties: ["data-testid"],
            },
          ],
        ],
        []
      ),
    ],
  },
  jest: {
    configure: {
      moduleNameMapper: {
        "@/(.*)$": "<rootDir>/src/$1",
        axios: "axios/dist/node/axios.cjs",
      },
    },
  },
};
