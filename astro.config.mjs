import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";
import prefetch from "@astrojs/prefetch";
import { websiteURLs } from "./src/config";

// https://astro.build/config
export default defineConfig({
	markdown: {
		extendDefaultPlugins: true,
	},
	integrations: [
		svelte(),
		mdx(),
		sitemap({
			serialize(item) {
				if (/whoami/.test(item.url)) {
					item.changefreq = "weekly";
				}
				return item;
			},
		}),
		compress(),
		prefetch({
			throttle: 5,
		}),
	],
	site: websiteURLs.prod,
});
