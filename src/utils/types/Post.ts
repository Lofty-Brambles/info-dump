import type { MarkdownInstance } from "astro";

export interface FrontmatterType {
	title: string;
	description: string;
	authors: string[];
	tags: string[];
	published: string;
	updated: string;
}

export type Post = MarkdownInstance<FrontmatterType>;
