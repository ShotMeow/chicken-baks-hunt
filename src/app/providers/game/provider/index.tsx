import type { ChickenType } from "@/entities/chicken";
import { type FC, type PropsWithChildren, useEffect, useState } from "react";
import React from "react";
import { GameContext } from "../context";

const GameProvider: FC<PropsWithChildren> = ({ children }) => {
	const [score, setScore] = useState<number>(0);
	const [hitRate, setHitRate] = useState<number>(0);
	const [limit, setLimit] = useState<number>(0);
	const [isPaused, setIsPaused] = useState<boolean>(false);

	const [chickens, setChickens] = useState<ChickenType[]>([]);
	const [shots, setShots] = useState(0);
	const [hits, setHits] = useState(0);

	const [spawnInterval, setSpawnInterval] = useState<number>(1500);

	const [activeModal, setActiveModal] = useState<
		"end" | "pause" | "restart" | null
	>(null);

	function calculateHitRate() {
		return shots === 0 ? 0 : Math.round((hits / shots) * 100);
	}

	useEffect(() => {
		setHitRate(calculateHitRate());
	}, [shots, hits]);

	useEffect(() => {
		setLimit(chickens.length);
	}, [chickens.length]);

	return (
		<GameContext.Provider
			value={{
				score,
				setScore,
				hitRate,
				setHitRate,
				limit,
				setLimit,
				isPaused,
				setIsPaused,
				chickens,
				setChickens,
				hits,
				setHits,
				shots,
				setShots,
				spawnInterval,
				setSpawnInterval,
				activeModal,
				setActiveModal,
			}}
		>
			{children}
		</GameContext.Provider>
	);
};

export default GameProvider;
