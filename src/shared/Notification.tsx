import clsx from "clsx";
import type { FC, HTMLAttributes } from "react";
import React from "react";

interface Props extends HTMLAttributes<HTMLParagraphElement> {
	text: string;
	align: "top" | "bottom";
}

const Notification: FC<Props> = ({ text, align, className, ...props }) => {
	return (
		<p
			className={clsx(
				"absolute cursor-auto opacity-0 peer-hover:opacity-100 transition-all duration-500 -z-10 py-1 px-2 text-neutral-30 text-[10px] rounded-sm bg-neutral-80/80 backdrop-blur-md left-1/2 -translate-x-1/2",
				{
					"-bottom-0 peer-hover:-bottom-8": align === "bottom",
					"-top-0 peer-hover:-top-8": align === "top",
				},
				className,
			)}
			onMouseDown={(event) => event.stopPropagation()}
			{...props}
		>
			{text}
		</p>
	);
};

export default Notification;
