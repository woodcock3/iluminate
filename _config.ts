import lume from "lume/mod.ts";
import esbuild from "lume/plugins/esbuild.ts";
import bundler from "lume/plugins/bundler.ts";
import date from "lume/plugins/date.ts";
import windicss from "./_plugins/windicss.ts";
import svgo from "lume/plugins/svgo.ts";
import terser from "lume/plugins/terser.ts";
import basePath from "lume/plugins/base_path.ts";
import slugifyUrls from "lume/plugins/slugify_urls.ts";
import resolveUrls from "lume/plugins/resolve_urls.ts";

const site = lume({
  location: new URL("https://woodcock3.github.io/luminate/"), // Update your base URL here
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
  .use(svgo())
  .use(date({
    locales: ["en-GB"],
  }))
  .use(basePath())
  .use(slugifyUrls({ alphanumeric: false }))
  .use(resolveUrls())

export default site;
