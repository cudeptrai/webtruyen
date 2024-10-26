const dataExample = [
	{
		name: "Ma Vương Trở Lại",
		image: "https://picsum.photos/seed/picsum/200/300",
		id: "ma-vuong-tro-lai-1234",
		chapter: 45,
		isHot: true,
		date: "2023-01-10",
	},
	{
		name: "Cuộc Chiến Thần Thoại",
		image: "https://picsum.photos/seed/picsum/200/300",
		id: "cuoc-chien-than-thoai-5678",
		chapter: 38,
		isHot: false,
		date: "2023-02-15",
	},
	{
		name: "Thế Giới Ngầm",
		image: "https://picsum.photos/seed/picsum/200/300",
		id: "the-gioi-ngam-9101",
		chapter: 12,
		isHot: true,
		date: "2023-03-20",
	},
	{
		name: "Kỳ Tích Phục Sinh",
		image: "https://picsum.photos/seed/picsum/200/300",
		id: "ky-tich-phuc-sinh-1121",
		chapter: 50,
		isHot: true,
		date: "2023-04-25",
	},
	{
		name: "Người Hùng Vô Danh",
		image: "https://picsum.photos/seed/picsum/200/300",
		id: "nguoi-hung-vo-danh-3141",
		chapter: 27,
		isHot: false,
		date: "2023-05-30",
	},
	{
		name: "Kẻ Săn Ma",
		image: "https://picsum.photos/seed/picsum/200/300",
		id: "ke-san-ma-5161",
		chapter: 21,
		isHot: true,
		date: "2023-06-10",
	},
	{
		name: "Thiên Đường Mộng Mơ",
		image: "https://picsum.photos/seed/picsum/200/300",
		id: "thien-duong-mong-mo-7181",
		chapter: 18,
		isHot: false,
		date: "2023-07-15",
	},
	{
		name: "Cuộc Chiến Huyền Thoại",
		image: "https://picsum.photos/seed/picsum/200/300",
		id: "cuoc-chien-huyen-thoai-9202",
		chapter: 99,
		isHot: true,
		date: "2023-08-20",
	},
	{
		name: "Hành Trình Về Miền Đất Hứa",
		image: "https://picsum.photos/seed/picsum/200/300",
		id: "hanh-trinh-ve-mien-dat-hua-1113",
		chapter: 35,
		isHot: false,
		date: "2023-09-25",
	},
	{
		name: "Truyền Thuyết Huyền Bí",
		image: "https://picsum.photos/seed/picsum/200/300",
		id: "truyen-thuyet-huyen-bi-1415",
		chapter: 27,
		isHot: true,
		date: "2023-10-30",
	},
];

export default defineEventHandler(async (event) => {
	try {
		const data = dataExample;

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
