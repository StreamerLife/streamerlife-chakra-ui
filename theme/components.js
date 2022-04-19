const components = {
  Link: {
    baseStyle: {
      color: "brand.primary.default",
    },
  },
  Heading: {
    baseStyle: {
      color: "white",
    },
    variants: {
      "with-line": {
        position: "relative",
        _before: {
          content: "''",
          position: "absolute",
          bottom: "-5",
          left: "0",
          bg: "brand.secondary.default",
          width: "140px",
          height: "6px",
          borderRadius: "full",
        },
      },
    },
  },
  Button: {
    baseStyle: {
      color: "black",
      borderRadius: "full",
      fontFamily: "Poppins, sans-serif",
    },
    variants: {
      primary: {
        bg: "brand.primary.default",
      },
      secondary: {
        bg: "brand.secondary.default",
      },
    },
  },
};

module.exports = components;
