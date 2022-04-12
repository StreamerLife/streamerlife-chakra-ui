const { colors } = require("./theme/colors");
const { fonts, FontsLoader } = require("./theme/fonts");

const theme = {
  colors: colors,
  fonts: fonts,
};

exports.theme = theme;
exports.FontsLoader = FontsLoader;
