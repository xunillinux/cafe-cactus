import { c as create_ssr_component, a as subscribe, b as add_attribute, e as escape, v as validate_component } from "../../chunks/index2.js";
import { X } from "../../chunks/runtime.esm.js";
const logo = "/_app/immutable/assets/logo-cafe-cactus.fd2ec86d.png";
let value = "en";
const LocaleSwitcher = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $_, $$unsubscribe__;
  $$unsubscribe__ = subscribe(X, (value2) => $_ = value2);
  $$unsubscribe__();
  return `<select data-te-select-init${add_attribute("value", value, 0)}><option class="${"p-2"}" value="${"en"}">${escape($_("locale.english"))}</option><option class="${"p-2"}" value="${"de"}">${escape($_("locale.german"))}</option></select>`;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $_, $$unsubscribe__;
  $$unsubscribe__ = subscribe(X, (value2) => $_ = value2);
  $$unsubscribe__();
  return `<header><div class="${"border-b border-gray-300 px-5 py-3 flex items-center justify-between"}"><div><img${add_attribute("src", logo, 0)}${add_attribute("alt", $_("title"), 0)} class="${"h-9 w-9 inline-block rounded-2xl"}">
			<h1 class="${"inline-block leading-none align-middle pt-1 ml-2"}">${escape($_("title"))}</h1></div>
		<div><div class="${"hidden sm:inline-block leading-none align-middle pt-2 mr-2"}">${validate_component(LocaleSwitcher, "LocaleSwitcher").$$render($$result, {}, {}, {})}</div>
			<i class="${"fa-brands fa-instagram inline-block align-middle w-10 h-10 ml-2"}"></i></div></div></header>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $_, $$unsubscribe__;
  $$unsubscribe__ = subscribe(X, (value2) => $_ = value2);
  $$unsubscribe__();
  return `<footer class="${"bg-white border-t border-gray-300 text-center p-3"}"><p>© ${escape($_("copyright"))}</p></footer>`;
});
const app = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"app flex flex-col min-h-screen"}">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

	<main class="${"w-full flex-grow py-4 px-4 bg-gray-100"}">${slots.default ? slots.default({}) : ``}</main>

	${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Layout as default
};
