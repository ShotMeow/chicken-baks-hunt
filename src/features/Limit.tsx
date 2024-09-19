import { GameContext } from "@/app/providers/game";
import Notification from "@/shared/Notification";
import Panel from "@/shared/Panel";
import clsx from "clsx";
import { type FC, useContext } from "react";
import React from "react";

const getTabColor = (index: number, limit: number) => {
	const thresholds = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
	const colors = {
		danger: "bg-danger-main group-hover:bg-danger-hover",
		warning: "bg-warning-main group-hover:bg-warning-hover",
		success: "bg-success-main group-hover:bg-success-hover",
		neutral: "bg-neutral-60 group-hover:bg-neutral-50",
	};

	if (index < 0 || index > 12) {
		return colors.neutral;
	}

	if (index < limit) {
		if (limit >= 9) {
			return colors.danger;
		}
		if (limit >= 6) {
			return colors.warning;
		}
		return colors.success;
	}

	return colors.neutral;
};

const Limit: FC = () => {
	const { limit } = useContext(GameContext);

	return (
		<div className="relative flex flex-col">
			<Panel>
				<div className="bg-white/5 size-8" />
				<div className="p-2 text-neutral-40 flex items-center gap-2">
					<p className="text-center w-[13px]">{limit}</p>
					<div className="flex items-center gap-[2px]">
						{new Array(12).fill(0).map((_, index) => (
							<div
								key={index}
								className={clsx(
									"w-[8px] h-1 rounded-full transition-colors",
									getTabColor(index, limit),
								)}
							/>
						))}
					</div>
					<p>12</p>
				</div>
			</Panel>
			<Notification text="Лимит куриц" align="bottom" />
		</div>
	);
};

export default Limit;
