const { extendTheme } = require("@chakra-ui/react");
const { colors } = require("./theme/colors");
const { fonts, FontsLoader } = require("./theme/fonts");

const theme = extendTheme({
  colors: colors,
  fonts: fonts,
});

exports.theme = theme;
exports.FontsLoader = FontsLoader;
