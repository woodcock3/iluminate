import { default } from "https://deno.land/x/lume@v1.9.0/plugins/liquid.ts";

async function liquidLoader(path) {
  const content = await Deno.readTextFile(path);
  return default(content);
}
