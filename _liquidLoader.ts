import { liquid } from "lume/plugins/liquid.ts";

async function liquidLoader(path) {
  const content = await Deno.readTextFile(path);
  return liquid(content);
}
