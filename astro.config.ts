import { defineConfig } from "astro/config";
import robotsTxt from "astro-robots-txt";
import svelte from "@astrojs/svelte";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";
import prefetch from "@astrojs/prefetch";

import sveltePreprocess from "svelte-preprocess";
import { websiteURLs } from "./src/config";
import { mdxConfig } from "./src/mdx.config";

// https://astro.build/config
export default defineConfig({
	markdown: {
		...mdxConfig,
		extendDefaultPlugins: true,
	},
	integrations: [
		svelte({
			preprocess: sveltePreprocess(),
		}),
		mdx(),
		sitemap(),
		robotsTxt({
			policy: [
				{
					userAgent: "*",
					disallow: "/posts",
				},
			],
		}),
		compress(),
		prefetch({
			throttle: 5,
		}),
	],
	site: websiteURLs.prod,
});
