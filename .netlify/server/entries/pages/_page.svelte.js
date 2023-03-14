import { c as create_ssr_component, a as subscribe, e as escape } from "../../chunks/index2.js";
import { X } from "../../chunks/runtime.esm.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $_, $$unsubscribe__;
  $$unsubscribe__ = subscribe(X, (value) => $_ = value);
  $$unsubscribe__();
  return `${$$result.head += `<!-- HEAD_svelte-cl0b8g_START -->${$$result.title = `<title>${escape($_("title"))}</title>`, ""}<meta name="${"description"}" content="${"Home"}"><!-- HEAD_svelte-cl0b8g_END -->`, ""}

<h1>${escape($_("home.welcome.title"))}</h1>
<br>
<p>${escape($_("home.welcome.p1"))} <bold>${escape($_("title"))}</bold>.</p>
<br>
<p>${escape($_("home.welcome.p2"))}</p>`;
});
export {
  Page as default
};
