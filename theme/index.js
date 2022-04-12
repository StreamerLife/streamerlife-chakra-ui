const { extendTheme } = require("@chakra-ui/react");
const { colors } = require("./colors");

const theme = extendTheme({ colors: colors });

module.exports = theme;
