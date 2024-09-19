import React, { useContext, useEffect, useRef, useState } from "react";
import type { FC, MouseEvent } from "react";

import "./assets/styles/globals.css";
import Mirage from "@/app/maps/Mirage";
import { GameContext } from "@/app/providers/game";
import { ModalsProvider } from "@/app/providers/modal";
import EndModal from "@/app/providers/modal/ui/modals/EndModal";
import cursorBase from "@/assets/cursors/turquoise.svg";
import { Chicken } from "@/entities/chicken";
import { chickenSpawn } from "@/utils/chickenSpawn";
import { complicationInterval } from "@/utils/complicationIncrease";
import Header from "@/widgets/Header";
import clsx from "clsx";

const Game: FC = () => {
	const gameContainerRef = useRef<HTMLDivElement>(null);
	const [spawnInterval, setSpawnInterval] = useState<number>(2000);
	const {
		limit,
		setScore,
		isPaused,
		chickens,
		setChickens,
		setHits,
		setShots,
	} = useContext(GameContext);

	const limitRef = useRef<number>(limit);

	useEffect(() => {
		limitRef.current = limit;
	}, [limit]);

	useEffect(() => {
		let spawnIntervalId: number;
		let complicationIntervalId: number;
		const handleVisibilityChange = () => {
			if (document.hidden) {
				clearInterval(spawnIntervalId);
				clearInterval(complicationIntervalId);
			} else {
				if (!isPaused) {
					spawnIntervalId = setInterval(() => {
						if (limitRef.current >= 12) {
							return clearInterval(spawnIntervalId);
						}
						chickenSpawn(gameContainerRef, setChickens);
					}, spawnInterval);
					complicationIntervalId = setInterval(() => {
						if (limitRef.current >= 12) {
							return clearInterval(complicationIntervalId);
						}
						complicationInterval(
							setSpawnInterval,
							spawnInterval,
							complicationIntervalId,
						);
					}, 1000);
				}
			}
		};

		handleVisibilityChange();
		document.addEventListener("visibilitychange", handleVisibilityChange);

		return () => {
			clearInterval(spawnIntervalId);
			clearInterval(complicationIntervalId);
			document.removeEventListener("visibilitychange", handleVisibilityChange);
		};
	}, [isPaused]);

	const handleShot = (event: MouseEvent<HTMLDivElement>) => {
		setShots((prev) => prev + 1);

		const target = event.target as HTMLElement;
		const isChicken = target.closest(".bch-chicken");

		if (isChicken) {
			const chickenId = Number(isChicken.getAttribute("data-index"));
			setHits((prev) => prev + 1);
			setScore((prev) => prev + 1);

			setChickens((prevChickens) =>
				prevChickens.filter((chicken) => chicken.index !== chickenId),
			);
		}
	};

	return (
		<div
			style={{
				cursor: `url("${cursorBase}") 10 10, crosshair`,
			}}
			onMouseDown={handleShot}
			ref={gameContainerRef}
			className="relative aspect-game size-full text-xs font-semibold text-neutral-50"
		>
			<Header />
			<div>
				{chickens.map((chicken) => (
					<Chicken
						data-index={chicken.index}
						className="bch-chicken"
						position={chicken.position}
						containerRef={gameContainerRef}
						key={chicken.index}
					/>
				))}
				<Mirage />
			</div>
			<div
				className={clsx(
					"absolute inset-0 pointer-events-none animate-danger transition-opacity duration-500",
					{
						"opacity-0": limit < 9,
					},
				)}
				style={{
					zIndex: 1000,
				}}
			/>
			<ModalsProvider />
		</div>
	);
};

export default Game;
