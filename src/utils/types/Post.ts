import type { MarkdownInstance } from "astro";

export interface FrontmatterType {
	title: string;
	description: string;
	authors: string[];
	tags: string[];
	published: number;
	updated: number;
	cover: {
		link: string;
		alt: string;
	};
}

export type Post = MarkdownInstance<FrontmatterType>;
