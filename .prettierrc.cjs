module.exports = {
	tabWidth: 4,
	useTabs: true,
	arrowParens: "avoid",
	proseWrap: "always",
	htmlWhitespaceSensitivity: "ignore",
	plugins: [require.resolve("prettier-plugin-astro")],
	overrides: [
		{
			files: "**/*.astro",
			options: { parser: "astro" },
		},
		{
			files: "**/*.ts",
			options: { parser: "typescript" },
		},
		{
			files: "**/*.svelte",
			options: { parser: "svelte" },
		},
	],
};
