import lume from "lume/mod.ts";
import toc from "https://deno.land/x/lume_markdown_plugins@v0.7.0/toc.ts";
import title from "https://deno.land/x/lume_markdown_plugins@v0.7.0/title.ts";
import footnotes from "https://deno.land/x/lume_markdown_plugins@v0.7.0/footnotes.ts";
import favicon from "lume/plugins/favicon.ts";
import sitemap from "lume/plugins/sitemap.ts";
import date from "lume/plugins/date.ts";
import readInfo from "lume/plugins/reading_info.ts";
import codeHighlight from "lume/plugins/code_highlight.ts";
import lightningCss from "lume/plugins/lightningcss.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import postcss from "lume/plugins/postcss.ts";

const markdown = {};

const site = lume(
  {
    location: new URL("https://desertsniper87.github.io"),
  },
  { markdown },
)
  .use(
    toc({
      level: 2,
    }),
  )
  .use(title())
  .use(footnotes())
  .use(date())
  .use(readInfo())
  .use(favicon())
  .use(sitemap())
  .use(codeHighlight())
  .use(lightningCss())
  .use(
    tailwindcss({
      options: {
        theme: {
          colors: {
            black: "#000000",
            emerald: "#047857",
            "emerald-dark": "#064e3b",
            "emerald-light": "#059669",
            indigo: "#3730a3",
            "indigo-dark": "#312e81",
            "indigo-light": "#4f46e5",
            lime: "#4d7c0f",
            "lime-dark": "#365314",
            "lime-light": "#65a30d",
            navy: "#081624",
            "navy-dark": "#030911",
            "navy-light": "#1a1d2f",
            "navy-light-super": "#29283e",
            orange: "#c2410c",
            "orange-dark": "#7c2d12",
            "orange-light": "#ea580c",
            pink: "#cb17c7",
            "pink-dark": "#4d074d",
            "pink-light": "#d462d6",
            red: "#7f1d1d",
            "red-dark": "#450a0a",
            "red-light": "#b91c1c",
            sky: "#0369a1",
            "sky-dark": "#0c4a6e",
            "sky-light": "#0284c7",
            slate: "#1e293b",
            "slate-dark": "#0f172a",
            "slate-light": "#334155",
            white: "#dadada",
            "white-dark": "#b9b9b9",
            yellow: "#854d0e",
            "yellow-dark": "#422006",
            "yellow-light": "#ca8a04",
            transparent: "transparent",
          },
          fontFamily: {
            basisc: ["sans-serif"],
            title: ["courier"],
          },
        },
      },
    }),
  )
  .use(postcss());

site.data("getYear", () => {
  return new Date().getFullYear();
});

export default site;
