import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-background text-textFaded text-sm min-h-screen">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
