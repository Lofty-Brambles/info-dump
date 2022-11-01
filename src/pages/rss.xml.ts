import rss from "@astrojs/rss";

export const get = () =>
	rss({
		title: "Info Dump!",
		description:
			"Info Dump is a simple blog aimed at getting some simple thoughts out to the world.",
		site: import.meta.env.SITE,
		items: import.meta.glob(""),
		// stylesheet: ""
		customData: "<language>en-uk</language>",
	});
