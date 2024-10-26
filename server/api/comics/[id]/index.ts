const dataDetailExample = [
	{
		id: "ma-vuong-tro-lai-1234",
		name: "Ma Vương Trở Lại",
		author: "Nguyễn Văn B",
		status: "Đang cập nhật",
		image: "https://picsum.photos/seed/picsum/200/300",
		category: ["Hành Động", "Kỳ Ảo"],
		description:
			"Một câu chuyện kỳ bí về sự trở lại của ma vương sau hàng ngàn năm. Liệu ai có thể ngăn chặn hắn trước khi quá muộn?",
		like: 15420,
		follow: 10234,
		view: 2567890,
		chapters: [
			{ href: "chapter-5", date: "2023-02-01" },
			{ href: "chapter-4", date: "2023-01-25" },
			{ href: "chapter-3", date: "2023-01-20" },
			{ href: "chapter-2", date: "2023-01-15" },
			{ href: "chapter-1", date: "2023-01-10" },
		],
	},
	{
		id: "cuoc-chien-than-thoai-5678",
		name: "Cuộc Chiến Thần Thoại",
		author: "Trần Thị C",
		status: "Hoàn thành",
		image: "https://picsum.photos/seed/picsum/200/300",
		category: ["Hành Động", "Chiến Tranh"],
		description:
			"Cuộc chiến giữa các thần thánh diễn ra trong vũ trụ. Ai sẽ là người sống sót cuối cùng?",
		like: 8430,
		follow: 5780,
		view: 1347890,
		chapters: [
			{ href: "chapter-3", date: "2023-02-25" },
			{ href: "chapter-2", date: "2023-02-20" },
			{ href: "chapter-1", date: "2023-02-15" },
		],
	},
	{
		id: "the-gioi-ngam-9101",
		name: "Thế Giới Ngầm",
		author: "Lê Văn D",
		status: "Đang cập nhật",
		image: "https://picsum.photos/seed/picsum/200/300",
		category: ["Kỳ Ảo", "Hành Động"],
		description:
			"Một thế giới ngầm đầy nguy hiểm và những bí mật chưa từng được khám phá.",
		like: 12678,
		follow: 7390,
		view: 1856789,
		chapters: [
			{ href: "chapter-2", date: "2023-03-25" },
			{ href: "chapter-1", date: "2023-03-20" },
		],
	},
	{
		id: "ky-tich-phuc-sinh-1121",
		name: "Kỳ Tích Phục Sinh",
		author: "Nguyễn Thị E",
		status: "Đang cập nhật",
		image: "https://picsum.photos/seed/picsum/200/300",
		category: ["Huyền Bí", "Tình Cảm"],
		description:
			"Câu chuyện về một kỳ tích có thể thay đổi số phận của nhiều người.",
		like: 9580,
		follow: 4000,
		view: 1543210,
		chapters: [
			{ href: "chapter-2", date: "2023-04-30" },
			{ href: "chapter-1", date: "2023-04-25" },
		],
	},
	{
		id: "nguoi-hung-vo-danh-3141",
		name: "Người Hùng Vô Danh",
		author: "Phạm Văn F",
		status: "Hoàn thành",
		image: "https://picsum.photos/seed/picsum/200/300",
		category: ["Hành Động", "Kỳ Ảo"],
		description:
			"Một người hùng không tên đứng lên chiến đấu vì công lý, mặc cho những khó khăn.",
		like: 7120,
		follow: 3200,
		view: 932000,
		chapters: [
			{ href: "chapter-2", date: "2023-06-05" },
			{ href: "chapter-1", date: "2023-05-30" },
		],
	},
	{
		id: "ke-san-ma-5161",
		name: "Kẻ Săn Ma",
		author: "Trần Văn G",
		status: "Đang cập nhật",
		image: "https://picsum.photos/seed/picsum/200/300",
		category: ["Hành Động", "Kỳ Ảo"],
		description:
			"Câu chuyện về một kẻ săn ma với sức mạnh phi thường và nhiệm vụ giải cứu thế giới.",
		like: 8500,
		follow: 4500,
		view: 1345670,
		chapters: [
			{ href: "chapter-2", date: "2023-06-15" },
			{ href: "chapter-1", date: "2023-06-10" },
		],
	},
	{
		id: "thien-duong-mong-mo-7181",
		name: "Thiên Đường Mộng Mơ",
		author: "Nguyễn Văn H",
		status: "Hoàn thành",
		image: "https://picsum.photos/seed/picsum/200/300",
		category: ["Tình Cảm", "Kỳ Ảo"],
		description:
			"Một thiên đường nơi những giấc mơ trở thành hiện thực, nhưng cái giá phải trả là gì?",
		like: 4930,
		follow: 2500,
		view: 787654,
		chapters: [
			{ href: "chapter-2", date: "2023-07-20" },
			{ href: "chapter-1", date: "2023-07-15" },
		],
	},
	{
		id: "cuoc-chien-huyen-thoai-9202",
		name: "Cuộc Chiến Huyền Thoại",
		author: "Trần Văn I",
		status: "Đang cập nhật",
		image: "https://picsum.photos/seed/picsum/200/300",
		category: ["Hành Động", "Kỳ Ảo"],
		description:
			"Cuộc chiến giữa các huyền thoại, nơi chỉ có một người sống sót.",
		like: 23450,
		follow: 13500,
		view: 3456789,
		chapters: [
			{ href: "chapter-2", date: "2023-08-25" },
			{ href: "chapter-1", date: "2023-08-20" },
		],
	},
	{
		id: "hanh-trinh-ve-mien-dat-hua-1113",
		name: "Hành Trình Về Miền Đất Hứa",
		author: "Nguyễn Văn K",
		status: "Hoàn thành",
		image: "https://picsum.photos/seed/picsum/200/300",
		category: ["Hành Động", "Thám Hiểm"],
		description: "Một cuộc hành trình đầy thử thách để tìm kiếm miền đất hứa.",
		like: 5320,
		follow: 1800,
		view: 654321,
		chapters: [
			{ href: "chapter-2", date: "2023-09-30" },
			{ href: "chapter-1", date: "2023-09-25" },
		],
	},
	{
		id: "truyen-thuyet-huyen-bi-1415",
		name: "Truyền Thuyết Huyền Bí",
		author: "Nguyễn Thị L",
		status: "Đang cập nhật",
		image: "https://picsum.photos/seed/picsum/200/300",
		category: ["Huyền Bí", "Kỳ Ảo"],
		description:
			"Những truyền thuyết kỳ bí đã từng tồn tại trong tâm trí con người.",
		like: 4120,
		follow: 1700,
		view: 879654,
		chapters: [
			{ href: "chapter-2", date: "2023-11-05" },
			{ href: "chapter-1", date: "2023-10-30" },
		],
	},
];

export default defineEventHandler(async (event) => {
	try {
		const params = event.context.params;

		if (!params) {
			return {
				success: false,
				data: null,
				message: `Params is required.`,
			};
		}
		const id = params.id || "";

		const data = dataDetailExample.find((item) => item.id === id);
		// console.log(data);

		setResponseStatus(event, 200);
		return {
			success: true,
			response: data,
			message: "Data has been processed successfully.",
		};
	} catch (error: any) {
		return {
			success: false,
			data: null,
			message: `${error.message}`,
		};
	}
});
