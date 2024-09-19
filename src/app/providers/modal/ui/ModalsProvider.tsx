import { GameContext } from "@/app/providers/game";
import EndModal from "@/app/providers/modal/ui/modals/EndModal";
import PauseModal from "@/app/providers/modal/ui/modals/PauseModal";
import RestartModal from "@/app/providers/modal/ui/modals/RestartModal";
import React from "react";
import { type FC, useContext, useEffect } from "react";

const ModalsProvider: FC = () => {
	const { setActiveModal, limit } = useContext(GameContext);

	useEffect(() => {
		if (limit >= 12) setActiveModal("end");
	}, [limit]);

	return (
		<>
			<EndModal />
			<PauseModal />
			<RestartModal />
		</>
	);
};

export default ModalsProvider;
