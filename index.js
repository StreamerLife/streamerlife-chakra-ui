// Require fonts
require("@fontsource/open-sans/400.css");
require("@fontsource/open-sans/700.css");
require("@fontsource/montserrat/500.css");

// Basic theme requirements
const { extendTheme } = require("@chakra-ui/react");
const colors = require("./theme/colors");
const fonts = require("./theme/fonts");

// Setup theme
const theme = extendTheme({
  colors: colors,
  fonts: fonts,
});

exports.default = theme;
