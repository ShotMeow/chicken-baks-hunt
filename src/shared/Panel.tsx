import clsx from "clsx";
import React, {
	type FC,
	type HTMLAttributes,
	type PropsWithChildren,
} from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const Panel: FC<PropsWithChildren<Props>> = ({
	className,
	children,
	...props
}) => {
	return (
		<div
			className={clsx(
				"group peer cursor-auto rounded-sm bg-neutral-80/80 hover:bg-neutral-70/80 transition-colors inline-flex items-center overflow-hidden",
				className,
			)}
			onMouseDown={(event) => event.stopPropagation()}
			{...props}
		>
			{children}
		</div>
	);
};

export default Panel;
