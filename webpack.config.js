//let typescript can use alias
const path = require("path");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  "import/resolve": {
    //let typescript can use alias
    plugins: [new TsconfigPathsPlugin()],
    extensions: ["ts", "tsx", "js", "jsx"],
    alias: {
      "@": path.resolve(__dirname, "src"),
      components: path.resolve(__dirname, "src/components"),
      assets: path.resolve(__dirname, "src/assets"),
      state: path.resolve(__dirname, "src/state"),
    },
  },
};
