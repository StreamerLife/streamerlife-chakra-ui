const { Global } = require("@emotion/react");

const FontsLoader = () => (
  <Global
    styles={`
    @font-face {
      font-family: "Montserrat";
      font-weight: 400;
      src: url("../fonts/Montserrat/static/Montserrat-Regular.ttf");
    }
    @font-face {
      font-family: "Open Sans";
      font-weight: 400;
      src: url("../fonts/Open_Sans/static/OpenSans/OpenSans-Regular.ttf");
    }
      `}
  />
);

const fonts = {
  body: "Open Sans, sans-serif",
  heading: "Montserrat, sans-serif",
  mono: "Menlo, monospace",
};

exports.fonts = fonts;
exports.FontsLoader = FontsLoader;
