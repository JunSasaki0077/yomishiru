"use client";
import { Heatmap } from "@mantine/charts";
import dayjs from "dayjs";

const data = {
	"2025-02-14": 2,
	"2025-02-11": 3,
	"2025-02-06": 4,
	"2025-02-05": 1,
};

export default function Chart() {
	return (
		<Heatmap
			data={data}
			startDate="2024-02-16"
			endDate="2025-02-16"
			withTooltip
			withMonthLabels
			monthLabels={[
				"1月",
				"2月",
				"3月",
				"4月",
				"5月",
				"6月",
				"7月",
				"8月",
				"9月",
				"10月",
				"11月",
				"12月",
			]}
			colors={["#ebedf0", "#c6e48b", "#7bc96f", "#239a3b", "#196127"]}
			gap={2}
			rectSize={12}
			getTooltipLabel={({ date, value }) =>
				`${dayjs(date).format("DD MMM, YYYY")} - ${value === null || value === 0 ? "No contributions" : `${value} contribution${value > 1 ? "s" : ""}`}`
			}
		/>
	);
}
