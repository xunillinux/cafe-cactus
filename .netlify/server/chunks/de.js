const header = {};
const home = {
  welcome: {
    title: "Willkommen im Cafe Kaktus!",
    p1: "Dies ist eine Website über ein (derzeit fiktives) Cafe mit dem Namen",
    p2: "Wie Sie sich wahrscheinlich denken können, ist das Projekt noch nicht abgeschlossen."
  }
};
const footer = {};
const title = "Cafe Kaktus";
const copyright = "2023 Coffee Kaktus";
const locale = {
  english: "Englisch",
  german: "Deutsch"
};
const de = {
  header,
  home,
  footer,
  title,
  copyright,
  locale
};
export {
  copyright,
  de as default,
  footer,
  header,
  home,
  locale,
  title
};
