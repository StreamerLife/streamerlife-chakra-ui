const { dtsPlugin } = require("esbuild-plugin-d.ts");
require("esbuild")
  .build({
    entryPoints: ["theme/index.ts"],
    bundle: true,
    minify: true,
    outfile: "index.js",
    loader: {
      ".woff2": "dataurl",
      ".woff": "dataurl",
    },
    plugins: [dtsPlugin()],
  })
  .catch(() => process.exit(1));
