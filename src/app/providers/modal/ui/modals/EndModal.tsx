import { GameContext } from "@/app/providers/game";
import ShareIcon from "@/assets/icons/ShareIcon";
import Button from "@/shared/Button";
import Modal from "@/shared/Modal";
import React, { type FC, useContext } from "react";

const EndModal: FC = () => {
	const {
		score,
		setSpawnInterval,
		hitRate,
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
		setSpawnInterval(1500);
		setChickens([]);
		setShots(0);
		setActiveModal(null);
	};

	return (
		<Modal
			className="flex flex-col items-center *:text-nowrap"
			visible={activeModal === "end"}
		>
			<div className="flex flex-col gap-4">
				<div className="flex justify-between items-center gap-7 text-center">
					<div>
						<p className="text-neutral-50 font-semibold">Количество очков</p>
						<p className="text-4xl font-extrabold text-white">{score}</p>
					</div>
					<div>
						<p className="text-neutral-50 font-semibold">Процент попаданий</p>
						<p className="text-4xl font-extrabold text-white">{hitRate}%</p>
					</div>
				</div>
				<div className="flex gap-2">
					<Button
						onClick={handleRestart}
						className="w-full"
						variant="secondary"
					>
						Начать заново
					</Button>
					<Button aria-label="Поделиться статистикой">
						<ShareIcon />
					</Button>
				</div>
			</div>
		</Modal>
	);
};

export default EndModal;
