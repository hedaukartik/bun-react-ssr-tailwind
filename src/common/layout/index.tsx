import React from "react";

export function Layout(props: { title: string; children: React.ReactNode }) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Web site created using bun-react-ssr-base app"
        />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <title>{props.title}</title>
      </head>
      <body>{props.children}</body>
    </html>
  );
}
