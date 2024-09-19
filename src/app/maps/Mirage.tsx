import Lottie, { type LottieRefCurrentProps } from "lottie-react";
import { type FC, useContext, useEffect, useRef } from "react";

import React from "react";

import { GameContext } from "@/app/providers/game";
import bgAnimation from "@/assets/lottie/de_mirage/background.json";
import houseLeftBottomJson from "@/assets/lottie/de_mirage/house-left-bottom.json";
import houseLeftTopJson from "@/assets/lottie/de_mirage/house-left-top.json";
import houseRightBottomJson from "@/assets/lottie/de_mirage/house-right-bottom.json";
import houseRightTopJson from "@/assets/lottie/de_mirage/house-right-top.json";

const Mirage: FC = () => {
	const { isPaused } = useContext(GameContext);

	const bgLottieRef = useRef<LottieRefCurrentProps>(null);
	const decor1LottieRef = useRef<LottieRefCurrentProps>(null);
	const decor2LottieRef = useRef<LottieRefCurrentProps>(null);
	const decor3LottieRef = useRef<LottieRefCurrentProps>(null);
	const decor4LottieRef = useRef<LottieRefCurrentProps>(null);

	useEffect(() => {
		const decor1Group =
			decor1LottieRef.current.animationContainerRef.current.querySelector("g");
		decor1Group.style.pointerEvents = "auto";
		const decor2Group =
			decor2LottieRef.current.animationContainerRef.current.querySelector("g");
		decor2Group.style.pointerEvents = "auto";
		const decor3Group =
			decor3LottieRef.current.animationContainerRef.current.querySelector("g");
		decor3Group.style.pointerEvents = "auto";
		const decor4Group =
			decor4LottieRef.current.animationContainerRef.current.querySelector("g");
		decor4Group.style.pointerEvents = "auto";
	}, [decor1LottieRef, decor2LottieRef, decor3LottieRef, decor4LottieRef]);

	useEffect(() => {
		if (isPaused) {
			bgLottieRef.current.pause();
			decor1LottieRef.current.pause();
			decor2LottieRef.current.pause();
			decor3LottieRef.current.pause();
			decor4LottieRef.current.pause();
		} else {
			bgLottieRef.current.play();
			decor1LottieRef.current.play();
			decor2LottieRef.current.play();
			decor3LottieRef.current.play();
			decor4LottieRef.current.play();
		}
	}, [isPaused]);

	return (
		<div className="absolute pointer-events-none left-0 top-0 size-full">
			<Lottie
				lottieRef={bgLottieRef}
				className="relative -z-50"
				animationData={bgAnimation}
				loop={true}
			/>
			<div>
				<Lottie
					lottieRef={decor1LottieRef}
					className="absolute left-0 top-0"
					animationData={houseLeftTopJson}
					loop={true}
					style={{ zIndex: 999 }}
				/>
				<Lottie
					lottieRef={decor2LottieRef}
					className="absolute left-0 top-0"
					animationData={houseLeftBottomJson}
					loop={true}
					style={{ zIndex: 999 }}
				/>
				<Lottie
					lottieRef={decor3LottieRef}
					className="absolute left-0 top-0"
					animationData={houseRightBottomJson}
					loop={true}
					style={{ zIndex: 999 }}
				/>
				<Lottie
					lottieRef={decor4LottieRef}
					className="absolute left-0 top-0"
					animationData={houseRightTopJson}
					loop={true}
					style={{ zIndex: 999 }}
				/>
			</div>
		</div>
	);
};

export default Mirage;
