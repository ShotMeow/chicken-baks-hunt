import { GameContext } from "@/app/providers/game";
import Button from "@/shared/Button";
import Modal from "@/shared/Modal";
import clsx from "clsx";
import React, { type FC, useContext } from "react";

const PauseModal: FC = () => {
	const {
		score,
		hitRate,
		limit,
		setSpawnInterval,
		setHits,
		setScore,
		setChickens,
		setShots,
		activeModal,
		setActiveModal,
	} = useContext(GameContext);

	const handleRestart = () => {
		setHits(0);
		setScore(0);
		setChickens([]);
		setShots(0);
		setSpawnInterval(1500);

		setActiveModal(null);
	};

	return (
		<Modal
			className="divide-y-2 divide-neutral-80 flex flex-col items-center *:text-nowrap"
			visible={activeModal === "pause"}
		>
			<div className="flex flex-col gap-4">
				<div className="flex items-center gap-4">
					<div className="flex items-center gap-2">
						<p>Очки</p>
						<p className="text-neutral-40">{score}</p>
					</div>
					<div className="flex items-center gap-2">
						<p>Процент попаданий</p>
						<p className="text-neutral-40">{hitRate}%</p>
					</div>
					<div className="flex items-center gap-2">
						<p>Куриц</p>
						<p
							className={clsx({
								"text-danger-main": limit >= 9,
								"text-warning-main": limit >= 6,
								"text-success-main": limit >= 0,
							})}
						>
							{limit}
						</p>
					</div>
				</div>
				<div className="flex items-center gap-2">
					<Button onClick={handleRestart} className="w-full" variant="default">
						Начать заново
					</Button>
					<Button
						onClick={() => setActiveModal(null)}
						className="w-full"
						variant="secondary"
					>
						Продолжить игру
					</Button>
				</div>
			</div>
		</Modal>
	);
};

export default PauseModal;
