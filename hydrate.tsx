/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

/*
    After SSR sends the static HTML page to the browser, the associated JavaScript runs to “hydrate” this static page, 
    attaching event listeners and making it fully interactive. 
    This creates a seamless transition from a static page to a dynamic app without reloading the browser.
*/

declare global {
  var PATH_TO_PAGE: string;
  var props: object;
}

import { hydrateRoot } from "react-dom/client";
const { default: App } = await import(globalThis.PATH_TO_PAGE);

console.log(globalThis.props);

hydrateRoot(document, <App {...globalThis.props} />);
