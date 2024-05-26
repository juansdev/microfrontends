const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");
const path = require("path");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "sales",
    projectName: "clients",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    devServer: {
      port: 5001,
      https: Boolean(process.env.HTTPS)
    },
    externals: [/^@sales\//],
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'main.js'
    }
  });
};
