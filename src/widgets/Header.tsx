import Hits from "@/features/Hits";
import Limit from "@/features/Limit";
import Pause from "@/features/Pause";
import Restart from "@/features/Restart";
import Score from "@/features/Score";
import type { FC } from "react";
import React from "react";

const Header: FC = () => {
	return (
		<header className="z-10 p-4 flex items-center justify-between">
			<div className="flex items-center gap-1">
				<Score />
				<Hits />
			</div>
			<div className="flex items-center gap-1">
				<Limit />
				<Restart />
				<Pause />
			</div>
		</header>
	);
};

export default Header;
