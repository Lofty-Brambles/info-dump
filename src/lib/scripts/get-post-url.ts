import type { Post } from "@lib/types/Post";
import { websiteURLs } from "@config";

export const getPostUrl = (item: Post) => {
	const base = websiteURLs.current();
	return `${base}/posts/${encodeURIComponent(item.frontmatter.title)}`;
};
