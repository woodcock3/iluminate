import lume from "lume/mod.ts";
import esbuild from "lume/plugins/esbuild.ts";
import liquid from "lume/plugins/liquid.ts";
import windicss from "./_plugins/windicss.ts";
import textLoader from "lume/core/loaders/text.ts";
import metas from "lume/plugins/metas.ts";
import * as processor from "./_processor.ts";
import svgo from "lume/plugins/svgo.ts";
import terser from "lume/plugins/terser.ts";
import basePath from "lume/plugins/base_path.ts";
import slugifyUrls from "lume/plugins/slugify_urls.ts";
import resolveUrls from "lume/plugins/resolve_urls.ts";

export const siteSrc = ".";
export const siteDest = "_site";

const site = lume({
  location: new URL("https://woodcock3.github.io/luminous/"), // Update your base URL here
});

site
  .ignore("README.md")
  .copy("img")
  .use(windicss({
    config: {
      shortcuts: {
        "btn-green": "text-white bg-green-500 hover:bg-green-700",
      },
    },
  }))
  .use(liquid())
  .use(esbuild({extensions: [".ts", ".js"]}))
  // .use(terser())
  .use(metas())
  .use(svgo())
  .use(basePath())
  .loadData([".md"]) 
  .loadAssets([".js"], textLoader)
  // .process([".js"], processor.js)
  .use(slugifyUrls({ alphanumeric: false }))
  .use(resolveUrls())

export default site;
