import { GameContext } from "@/app/providers/game";
import RestartIcon from "@/assets/icons/RestartIcon";
import Button from "@/shared/Button";
import Notification from "@/shared/Notification";
import { type FC, useContext } from "react";
import React from "react";

const Restart: FC = () => {
	const { setActiveModal } = useContext(GameContext);

	return (
		<>
			<div className="relative">
				<Button onClick={() => setActiveModal("restart")}>
					<RestartIcon />
				</Button>
				<Notification align="bottom" text="Рестарт" />
			</div>
		</>
	);
};

export default Restart;
