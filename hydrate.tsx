/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

declare global {
  var PATH_TO_PAGE: string;
  var props: object;
}

import { hydrateRoot } from "react-dom/client";
const { default: App } = await import(globalThis.PATH_TO_PAGE);

console.log(globalThis.props);

hydrateRoot(document, <App {...globalThis.props} />);
