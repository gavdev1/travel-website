const postcssPresentEnv = require("postcss-preset-env");

module.exports = {
  plugins: [
        require("postcss-nested"),
        require("postcss-simple-vars"),
        require("postcss-include-media"),
        require("postcss-color-function"),
        require("cssnano"),
        require("css-declaration-sorter"),
        postcssPresentEnv({
          stage: 3
        })
  ]
}