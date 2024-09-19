import { GameContext } from "@/app/providers/game";
import Button from "@/shared/Button";
import Modal from "@/shared/Modal";
import React, { type FC, useContext } from "react";

const RestartModal: FC = () => {
	const {
		setSpawnInterval,
		activeModal,
		setActiveModal,
		setHits,
		setScore,
		setChickens,
		setShots,
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
			className="flex flex-col items-center *:text-nowrap"
			visible={activeModal === "restart"}
		>
			<div className="flex flex-col gap-4">
				<p className="text-lg font-bold text-white">
					Вы уверены, что хотите начать заново?
				</p>
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

export default RestartModal;
