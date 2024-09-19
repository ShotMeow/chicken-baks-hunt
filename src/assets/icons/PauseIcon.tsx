import type { FC, SVGProps } from "react";
import React from "react";

interface Props extends SVGProps<SVGSVGElement> {}

const PauseIcon: FC<Props> = ({ width = 16, height = 16, ...props }) => {
	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M3.3335 2.66667C3.3335 2.29848 3.63197 2 4.00016 2H6.66683C7.03502 2 7.3335 2.29848 7.3335 2.66667V13.3333C7.3335 13.7015 7.03502 14 6.66683 14H4.00016C3.63197 14 3.3335 13.7015 3.3335 13.3333V2.66667ZM4.66683 3.33333V12.6667H6.00016V3.33333H4.66683Z"
				fill="currentColor"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M8.6665 2.66667C8.6665 2.29848 8.96498 2 9.33317 2H11.9998C12.368 2 12.6665 2.29848 12.6665 2.66667V13.3333C12.6665 13.7015 12.368 14 11.9998 14H9.33317C8.96498 14 8.6665 13.7015 8.6665 13.3333V2.66667ZM9.99984 3.33333V12.6667H11.3332V3.33333H9.99984Z"
				fill="currentColor"
			/>
		</svg>
	);
};

export default PauseIcon;
