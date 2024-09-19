import type { SetStateAction } from "react";

export const complicationInterval = (
	setSpawnInterval: (value: SetStateAction<number>) => void,
	spawnInterval: number,
	complicationIntervalId: number,
) => {
	setSpawnInterval((prev) => {
		if (spawnInterval > 1000) {
			return prev - 30;
		}
		if (spawnInterval > 600) {
			return prev - 20;
		}
		return Math.max(prev - 10, 250);
	});

	if (spawnInterval <= 250) clearInterval(complicationIntervalId);
};
