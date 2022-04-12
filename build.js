require("esbuild")
  .build({
    entryPoints: ["./theme/index.js"],
    bundle: true,
    minify: true,
    outfile: "index.js",
    loader: {
      ".woff2": "dataurl",
      ".woff": "dataurl",
    },
  })
  .catch(() => process.exit(1));
