export const UnixToDate = (unix: number) => new Date(unix);

export const UnixToGeneric = (unix: number) => {
	const pubDate = new Date(unix);
	const monthMap = new Map<number, string>([
		[0, "Jan"],
		[1, "Feb"],
		[2, "Mar"],
		[3, "Apr"],
		[4, "May"],
		[5, "Jun"],
		[6, "Jul"],
		[7, "Aug"],
		[8, "Sep"],
		[9, "Oct"],
		[10, "Nov"],
		[11, "Dec"],
	]);
	return {
		day: pubDate.getDate().toString().padStart(2, "0"),
		month: monthMap.get(pubDate.getMonth()),
		year: pubDate.getFullYear(),
		whole() {
			return [this.day, this.month, this.year].join("&nbsp;")
		}
	};
};
