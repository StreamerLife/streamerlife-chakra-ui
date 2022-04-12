const { extendTheme } = require("@chakra-ui/react");
const colors = require("./theme/colors");
const fonts = require("./theme/fonts");

const theme = extendTheme({
  colors: colors,
  fonts: fonts,
});

exports.default = theme;
