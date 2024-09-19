import { GameContext } from "@/app/providers/game";
import clsx from "clsx";
import {
	type FC,
	type HTMLAttributes,
	type PropsWithChildren,
	useContext,
	useEffect,
} from "react";
import React from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
	visible: boolean;
}

const Modal: FC<PropsWithChildren<Props>> = ({
	visible,
	children,
	className,
	...props
}) => {
	const { setIsPaused } = useContext(GameContext);

	useEffect(() => {
		if (visible) {
			setIsPaused(true);
		} else {
			setIsPaused(false);
		}
	}, [visible]);

	return (
		<div
			className={clsx(
				"absolute cursor-auto left-0 top-0 size-full transition-all duration-500 bg-neutral-90/85 opacity-0 pointer-events-none flex items-center justify-center",
				{
					"opacity-100 pointer-events-auto": visible,
				},
			)}
			onMouseDown={(event) => event.stopPropagation()}
			style={{
				zIndex: 9999,
			}}
			{...props}
		>
			<div
				className={clsx(
					"bg-neutral-90 rounded-lg p-5 scale-0 transition-transform duration-500 ",
					{
						"scale-100": visible,
					},
					className,
				)}
			>
				{children}
			</div>
		</div>
	);
};

export default Modal;
