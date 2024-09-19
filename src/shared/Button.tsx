import clsx from "clsx";
import type { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";
import React from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: "default" | "secondary";
}

const Button: FC<PropsWithChildren<Props>> = ({
	className,
	type = "button",
	children,
	variant,
	...props
}) => {
	return (
		<button
			className={clsx(
				"peer cursor-pointer bg-neutral-80/80 rounded-sm p-2 flex items-center justify-center gap-2 text-neutral-40 hover:text-white transition-colors hover:bg-neutral-70/80 backdrop-blur-md",
				{
					"hover:bg-white/10 hover:text-white active:bg-white/5 bg-white/5":
						variant === "default",
					"bg-secondary-button-main text-secondary-main hover:bg-secondary-button-hover active:bg-secondary-button-active":
						variant === "secondary",
				},
				className,
			)}
			onMouseDown={(event) => event.stopPropagation()}
			type={type}
			{...props}
		>
			{children}
		</button>
	);
};

export default Button;
