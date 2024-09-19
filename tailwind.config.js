/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{ts,tsx}"],
	theme: {
		extend: {
			aspectRatio: {
				game: "191:90",
			},
			borderRadius: {
				sm: "6px",
				lg: "20px",
			},
			colors: {
				neutral: {
					90: "#13141E",
					80: "#1F202D",
					70: "#2D2D37FF",
					60: "#484D66",
					50: "#676C8B",
					40: "#8E94B6",
					30: "#EDEDED",
				},
				secondary: {
					main: "#00FFFF",
					hover: "#C1FFFF",
					active: "#00D4D4",
					button: {
						main: "rgba(0, 255, 255, .1)",
						hover: "rgba(0, 255, 255, .2)",
						active: "rgba(0, 255, 255, .05)",
					},
				},
				success: {
					main: "#57D01E",
					hover: "#42B40C",
				},
				warning: {
					main: "#E8B132",
					hover: "#DAA428",
				},
				danger: {
					main: "#F83A46",
					hover: "#E51C28",
				},
			},
			backdropBlur: {
				md: "blur(10px)",
			},
			animation: {
				danger: "danger 2s infinite",
			},
			keyframes: {
				danger: {
					"0%, 100%": {
						"box-shadow": "inset 0 0 40px rgba(255, 0, 0, .2)",
					},
					"50%": {
						"box-shadow": "inset 0 0 80px rgba(255, 0, 0, .4)",
					},
				},
			},
		},
	},
	plugins: [],
};
