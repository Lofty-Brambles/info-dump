import type { RehypePlugins, RemarkPlugins, ShikiConfig } from "astro";
import type { Node } from "mdast-util-toc/lib";

import { rehypeAccessibleEmojis } from "rehype-accessible-emojis";

import getReadTime from "reading-time";
import { toString } from "mdast-util-to-string";
import { toc } from "mdast-util-toc";
import { visit } from "unist-util-visit";

export const remarkTimeToRead = () => {
	return (tree: Node, { data }: any) => {
		const text = toString(tree);
		const readingTime = getReadTime(text);
		data.astro.frontmatter.minutesRead = readingTime.text;
	};
};

export const downgradeHeadings = () => {
	return (tree: Node) => {
		visit(tree, (node: Node) => {
			if (node.type === "heading") node.depth++;
		});
	};
};

/* Credits :-
	https://github.com/remarkjs/remark-toc */
type tocType = Node & {
	children: Node[];
};

export const remarkToc = () => {
	return (node: tocType) => {
		const res = toc(node, {
			heading: "Table of Contents",
			maxDepth: 3,
		});

		if (
			res.endIndex === null ||
			res.index === null ||
			res.index === -1 ||
			!res.map
		) {
			return;
		}

		node.children = [
			...node.children.slice(0, res.index),
			res.map,
			...node.children.slice(res.endIndex),
		];
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
	remarkPlugins: [remarkTimeToRead, remarkToc, downgradeHeadings],
	rehypePlugins: [rehypeAccessibleEmojis as any],
};
