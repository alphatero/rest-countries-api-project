module.exports = {
  resolve: {
    extensions: ["ts", "tsx", "js", "jsx"],
    alias: {
      components: path.resolve(__dirname, "src/components"),
      assets: path.resolve(__dirname, "src/assets"),
    },
  },
};
