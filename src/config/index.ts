import { config } from "dotenv";

config();

export const websiteURLs = {
	dev:
		process.env.DEV_WEBSITE_URL?.trim().replace(/\/$/g, "") ||
		"http://localhost:3000",
	prod: (process.env.PROD_WEBSITE_URL as string).trim().replace(/\/$/g, ""),
	current() {
		return import.meta.env.DEV ? this.dev : this.prod;
	},
};

export const blogDetails = {
	name: process.env.BLOG_NAME?.trim() || "Info Dump",
	description:
		process.env.BLOG_DESCRIPTION?.trim() ||
		"Info Dump is a simple blog aimed at getting some simple thoughts out to the world.",
	author: process.env.BLOG_AUTHORS?.split(",").map(e => e.trim()) || [
		"Lofty Brambles",
	],
	defaultTitle: process.env.BLOG_DEFAULT_TITLE || "Info Dump | Pen-time!",
};
