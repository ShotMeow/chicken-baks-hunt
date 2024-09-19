import { GameContext } from "@/app/providers/game";
import Panel from "@/shared/Panel";
import { type FC, useContext } from "react";
import React from "react";

const Score: FC = () => {
	const { score } = useContext(GameContext);

	return (
		<Panel>
			<p className="p-2">Очки</p>
			<p className="text-neutral-40 bg-white/5 p-2 w-[39px] text-center">
				{score}
			</p>
		</Panel>
	);
};

export default Score;
