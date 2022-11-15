import type { RehypePlugins, RemarkPlugins, ShikiConfig } from "astro";

import { rehypeAccessibleEmojis } from "rehype-accessible-emojis";
import getReadTime from "reading-time";
import { toString } from "mdast-util-to-string";

export const remarkTimeToRead = () => {
	return (tree: unknown, { data }: any) => {
		const text = toString(tree);
		const readingTime = getReadTime(text);
		data.astro.frontmatter.minutesRead = readingTime.text;
	};
};

interface markdown {
	drafts?: boolean;
	shikiConfig?: Partial<ShikiConfig>;
	syntaxHighlight?: "shiki" | "prism" | false;
	remarkPlugins?: RemarkPlugins;
	rehypePlugins?: RehypePlugins;
	extendDefaultPlugins?: boolean;
}

export const mdxConfig: markdown = {
	remarkPlugins: [remarkTimeToRead],
	rehypePlugins: [rehypeAccessibleEmojis],
};
