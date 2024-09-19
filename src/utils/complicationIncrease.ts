import type { SetStateAction } from "react";

export const complicationInterval = (
	setSpawnInterval: (value: SetStateAction<number>) => void,
	spawnInterval: number,
	complicationIntervalId: number,
) => {
	setSpawnInterval((prev) => Math.max(prev - 30, 300));

	if (spawnInterval <= 300) clearInterval(complicationIntervalId);
};
