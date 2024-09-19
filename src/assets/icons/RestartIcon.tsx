import type { FC, SVGProps } from "react";
import React from "react";

interface Props extends SVGProps<SVGSVGElement> {}

const RestartIcon: FC<Props> = ({ width = 16, height = 16, ...props }) => {
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
				d="M0.666667 2C1.03486 2 1.33333 2.29848 1.33333 2.66667V6H4.66667C5.03486 6 5.33333 6.29848 5.33333 6.66667C5.33333 7.03486 5.03486 7.33333 4.66667 7.33333H0.666667C0.298477 7.33333 0 7.03486 0 6.66667V2.66667C0 2.29848 0.298477 2 0.666667 2Z"
				fill="currentColor"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M7.07024 1.40438C8.50152 1.20301 9.95947 1.47225 11.2244 2.17153C12.4894 2.87081 13.4928 3.96226 14.0835 5.28141C14.6742 6.60056 14.8202 8.07596 14.4995 9.48531C14.1788 10.8946 13.4088 12.1616 12.3054 13.0952C11.202 14.0289 9.82511 14.5786 8.38212 14.6617C6.93913 14.7447 5.50824 14.3566 4.30504 13.5557C3.10184 12.7548 2.19151 11.5846 1.71122 10.2213C1.58887 9.87407 1.7712 9.49337 2.11847 9.37102C2.46574 9.24867 2.84644 9.43101 2.96879 9.77827C3.35302 10.8689 4.08128 11.805 5.04384 12.4458C6.0064 13.0865 7.15112 13.397 8.30551 13.3306C9.4599 13.2641 10.5614 12.8243 11.4441 12.0774C12.3268 11.3305 12.9429 10.3169 13.1994 9.18945C13.456 8.06198 13.3392 6.88166 12.8666 5.82633C12.3941 4.77101 11.5913 3.89786 10.5794 3.33843C9.56739 2.77901 8.40102 2.56361 7.256 2.72471C6.11098 2.88581 5.04933 3.41467 4.23101 4.23161C4.22625 4.23636 4.22142 4.24104 4.21652 4.24564L1.12319 7.15231C0.854867 7.40443 0.432961 7.39131 0.180833 7.12299C-0.0712944 6.85467 -0.0581685 6.43276 0.210151 6.18064L3.29633 3.28069C4.31823 2.26368 5.64238 1.60528 7.07024 1.40438Z"
				fill="currentColor"
			/>
		</svg>
	);
};

export default RestartIcon;