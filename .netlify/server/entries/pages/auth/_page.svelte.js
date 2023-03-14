import { c as create_ssr_component, e as escape, n as null_to_empty, b as add_attribute, v as validate_component } from "../../../chunks/index2.js";
const Button_svelte_svelte_type_style_lang = "";
const css = {
  code: ".cactus-button.svelte-138msod{font-weight:700;border:0;border-radius:0.375rem;display:inline-block;line-height:1}.cactus-button--primary.svelte-138msod{color:#fff;background-color:#CBDFBD}.cactus-button--secondary.svelte-138msod{color:#57534e;background-color:transparent;box-shadow:rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset}.cactus-button--small.svelte-138msod{font-size:0.75rem;padding:10px 16px}.cactus-button--medium.svelte-138msod{font-size:0.875rem;padding:11px 20px}.cactus-button--large.svelte-138msod{font-size:1rem;padding:12px 24px}",
  map: null
};
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let mode;
  let { primary = false } = $$props;
  let { size = "medium" } = $$props;
  let { label = "" } = $$props;
  if ($$props.primary === void 0 && $$bindings.primary && primary !== void 0)
    $$bindings.primary(primary);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  $$result.css.add(css);
  mode = primary ? "cactus-button--primary" : "cactus-button--secondary";
  return `<button type="${"button"}" class="${escape(null_to_empty(["cactus-button", `cactus-button--${size}`, mode].join(" ")), true) + " svelte-138msod"}">${escape(label)}
</button>`;
});
const InputText = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { type = "text" } = $$props;
  let { label = "" } = $$props;
  let { placeholder = "" } = $$props;
  let { id = "" } = $$props;
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  return `<label class="${"block text-gray-700 text-sm font-bold mb-2"}"${add_attribute("for", id, 0)}>${escape(label)}</label>
<input class="${"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"}"${add_attribute("id", id, 0)}${add_attribute("type", type, 0)}${add_attribute("placeholder", placeholder, 0)}>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"w-full flex-grow grid place-items-center mt-8"}"><div class="${"w-full max-w-xs"}"><form class="${"bg-white shadow-md rounded px-8 pt-6 pb-8"}"><div class="${"mb-4"}">${validate_component(InputText, "InputText").$$render(
    $$result,
    {
      id: "username",
      label: "Username",
      placeholder: "Username",
      type: "text"
    },
    {},
    {}
  )}</div>
			<div class="${"mb-6"}">${validate_component(InputText, "InputText").$$render(
    $$result,
    {
      id: "password",
      label: "Password",
      placeholder: "**************",
      type: "password"
    },
    {},
    {}
  )}</div>
			<div class="${"flex items-center justify-between"}">${validate_component(Button, "Button").$$render(
    $$result,
    {
      label: "Log In",
      primary: true,
      size: "large"
    },
    {},
    {}
  )}

				<a class="${"inline-block font-bold text-xs text-gray-400 hover:text-gray-900"}" href="${"/auth"}">Forgot Password?
				</a></div></form></div></div>`;
});
export {
  Page as default
};
