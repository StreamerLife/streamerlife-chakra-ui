const components = {
  Input: {
    variants: {
      outline: {
        field: {
          border: "2px solid",
          borderColor: "brand.grey.600",
          outline: "none",
          _focus: {
            borderColor: "brand.secondary.500",
            outline: "none",
          },
        },
      },
    },
  },
  Link: {
    baseStyle: {
      color: "brand.primary.500",
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
          bg: "brand.secondary.500",
          width: "140px",
          height: "6px",
          borderRadius: "full",
        },
      },
    },
  },
  Button: {
    baseStyle: {
      borderRadius: "full",
      fontFamily: "Poppins, sans-serif",
    },
  },
};

module.exports = components;
