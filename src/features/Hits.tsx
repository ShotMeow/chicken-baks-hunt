import { GameContext } from "@/app/providers/game";
import Panel from "@/shared/Panel";
import { type FC, useContext } from "react";
import React from "react";

const Hits: FC = () => {
	const { hitRate } = useContext(GameContext);

	return (
		<Panel>
			<p className="p-2">Процент попаданий</p>
			<p className="text-neutral-40 bg-white/5 p-2 w-[48px] text-center">
				{hitRate}%
			</p>
		</Panel>
	);
};

export default Hits;
