import chickenAnimation from "@/assets/lottie/chickens/chicken.json";
import Lottie, { type LottieRefCurrentProps } from "lottie-react";
import {
	type FC,
	type HTMLAttributes,
	type RefObject,
	useContext,
	useEffect,
	useRef,
	useState,
} from "react";
import React from "react";

import { GameContext } from "@/app/providers/game";
import cursorActive from "@/assets/cursors/red.svg";
import clsx from "clsx";

interface Props extends HTMLAttributes<HTMLDivElement> {
	position: {
		x: number;
		y: number;
	};
	containerRef: RefObject<HTMLDivElement>;
}

const Chicken: FC<Props> = ({
	position,
	className,
	containerRef,
	...props
}) => {
	const { isPaused } = useContext(GameContext);

	const [x, setX] = useState<number>(position.x);
	const [targetX, setTargetX] = useState<number>(position.x);
	const [side, setSide] = useState<1 | -1>(1);
	const lottieRef = useRef<LottieRefCurrentProps>(null);
	const animationRef = useRef<number | null>(null);
	const speed = 1;
	const timerRef = useRef<number | null>(null);

	useEffect(() => {
		const containerWidth = containerRef.current?.clientWidth || 0;
		const centerX = containerWidth / 2;
		const randomX = centerX + (Math.random() * 300 - 130);
		setTargetX(randomX);

		if (randomX > x) {
			setSide(-1);
		} else {
			setSide(1);
		}
	}, [containerRef]);

	const [isStop, setIsStop] = useState<boolean>(false);

	useEffect(() => {
		if (isStop) {
			lottieRef.current.stop();
		} else {
			if (isPaused) {
				lottieRef.current.pause();
			} else {
				lottieRef.current.play();
			}
		}
	}, [isStop, isPaused]);

	const getRandomDelay = () => Math.random() * 2000 + 1000;

	useEffect(() => {
		const animate = () => {
			if (isPaused) {
				if (timerRef.current) {
					clearTimeout(timerRef.current);
					timerRef.current = null;
				}
				return;
			}

			if (Math.abs(x - targetX) > 1) {
				if (isStop) setIsStop(false);
				const delta = targetX - x > 0 ? speed : -speed;
				setX((prev) => prev + delta);

				animationRef.current = requestAnimationFrame(animate);
			} else {
				if (animationRef.current) {
					cancelAnimationFrame(animationRef.current);
					animationRef.current = null;
					setIsStop(true);

					timerRef.current = setTimeout(() => {
						const containerWidth = containerRef.current?.clientWidth || 0;
						const centerX = containerWidth / 2;
						const randomX = centerX + (Math.random() * 300 - 130);
						setTargetX(randomX);
						setSide(randomX > x ? -1 : 1);
						setIsStop(false);
					}, getRandomDelay());
				}
			}
		};

		animationRef.current = requestAnimationFrame(animate);

		return () => {
			if (animationRef.current) {
				cancelAnimationFrame(animationRef.current);
			}
			if (timerRef.current) {
				clearTimeout(timerRef.current);
			}
		};
	}, [x, targetX, isPaused]);

	return (
		<Lottie
			className={clsx("absolute size-12", className)}
			style={{
				top: `${position.y}px`,
				transform: `translateX(${x - 48}px) scaleX(${side})`,
				cursor: `url("${cursorActive}") 6 6, crosshair`,
				zIndex: position.y,
			}}
			lottieRef={lottieRef}
			animationData={chickenAnimation}
			loop={true}
			{...props}
		/>
	);
};

export default Chicken;
