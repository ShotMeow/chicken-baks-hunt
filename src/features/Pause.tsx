import { GameContext } from "@/app/providers/game";
import PauseIcon from "@/assets/icons/PauseIcon";
import Button from "@/shared/Button";
import Notification from "@/shared/Notification";
import { type FC, useContext } from "react";
import React from "react";

const Pause: FC = () => {
	const { setActiveModal } = useContext(GameContext);

	return (
		<>
			<div className="relative">
				<Button onClick={() => setActiveModal("pause")}>
					<PauseIcon />
				</Button>
				<Notification align="bottom" text="Пауза" />
			</div>
		</>
	);
};

export default Pause;
