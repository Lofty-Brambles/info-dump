import type { MarkdownInstance } from "astro";

export interface FrontmatterType {
	title: string;
	description: string;
	author: string;
	tags: string[];
	published: number;
	updated: number;
	minutesRead: string;
	cover: {
		url: string;
		alt: string;
	};
}

export type Post = MarkdownInstance<FrontmatterType>;
