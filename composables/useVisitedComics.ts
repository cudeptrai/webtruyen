type Comic = {
	id: string;
	name: string;
	image: string;
	url: string;
	chapter: string;
};

export function useVisitedComics(): {
	visitedComics: Ref<Comic[]>;
	addVisitedComic: (comic: Comic) => void;
	findComicById: (id: string) => Comic | undefined;
} {
	const visitedComics: Ref<Comic[]> = ref([]);

	const loadVisitedComics = (): void => {
		if (typeof window !== "undefined") {
			const storedComics = localStorage.getItem("visitedComics");
			visitedComics.value = storedComics ? JSON.parse(storedComics) : [];
		}
	};

	const addVisitedComic = (comic: Comic): void => {
		const index = visitedComics.value.findIndex((item) => item.id === comic.id);

		if (index !== -1) {
			visitedComics.value[index] = comic;
		} else {
			visitedComics.value.push(comic);
		}

		if (typeof window !== "undefined") {
			localStorage.setItem(
				"visitedComics",
				JSON.stringify(visitedComics.value),
			);
		}
	};

	const findComicById = (id: string): Comic | undefined => {
		return visitedComics.value.find((comic) => comic.id === id);
	};

	onMounted(() => {
		loadVisitedComics();
	});

	return {
		visitedComics,
		addVisitedComic,
		findComicById,
	};
}
