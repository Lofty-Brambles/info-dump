import type { Post } from "@lib/types/Post";
import { websiteURLs } from "@config";

export const getPostUrl = (
	item: Post,
	options: { onlyEnds: boolean } = { onlyEnds: false }
) => {
	const urls = item.url?.split("/").slice(-1)[0]?.split(".")[0] as string;
	const base = websiteURLs.current();
	return !options.onlyEnds ? `${base}/posts/${urls}` : urls;
};
