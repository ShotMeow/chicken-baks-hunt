import type { ChickenType } from "@/entities/chicken";
import type { MutableRefObject, SetStateAction } from "react";

// Handler
export const chickenSpawn = (
	gameContainerRef: MutableRefObject<HTMLDivElement>,
	setChickens: (value: SetStateAction<ChickenType[]>) => void,
) => {
	const x = Math.round(
		Math.random() > 0.5 ? 140 : gameContainerRef.current.clientWidth - 140,
	);
	const y = Math.round(
		Math.random() * (gameContainerRef.current.clientHeight - 160 - 50) + 150,
	);
	setChickens((prevChickens) => [
		...prevChickens,
		{
			position: {
				y: y,
				x: x,
			},
			index: Date.now(),
		},
	]);
};
