import { y, O, r as re } from "../../chunks/runtime.esm.js";
const defaultLocale = "en";
y("en", () => import("../../chunks/en.js"));
y("de", () => import("../../chunks/de.js"));
O({
  fallbackLocale: defaultLocale,
  initialLocale: defaultLocale
});
const load = async () => {
  await re();
};
export {
  load
};
