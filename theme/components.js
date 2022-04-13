const components = {
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
          bottom: "-1em",
          right: "0",
          bg: "brand.secondary.100",
          width: "140px",
          height: "6px",
        },
      },
    },
  },
};

module.exports = components;
