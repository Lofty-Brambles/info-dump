import rss from "@astrojs/rss";

import { getPostUrl } from "@lib/scripts/get-post-url";
import { UnixToDate } from "@lib/scripts/date-manager";
import { blogDetails } from "@config";
import type { Post } from "@lib/types/Post";

const posts: Post[] = Object.values(
	import.meta.glob("../../content/posts/*.mdx", { eager: true })
);
posts.sort((p, n) => p.frontmatter.published - n.frontmatter.published);

export const get = () =>
	rss({
		title: blogDetails.defaultTitle,
		description: blogDetails.description,
		site: import.meta.env.SITE,
		items: posts.map(post => ({
			link: getPostUrl(post),
			title: post.frontmatter.title,
			pubDate: UnixToDate(post.frontmatter.published),
			description: post.frontmatter.description,
		})),
		// stylesheet: ""
		customData: "<language>en-uk</language>",
	});
