import localFont from "next/font/local";

export const Cause = localFont({
	src: [
		{
			path: "./../../public/cause/fonts/otf/Cause-Thin.otf",
			weight: "100",
			style: "normal",
		},
		{
			path: "./../../public/cause/fonts/otf/Cause-ExtraLight.otf",
			weight: "200",
			style: "normal",
		},
		{
			path: "./../../public/cause/fonts/otf/Cause-Light.otf",
			weight: "300",
			style: "normal",
		},
		{
			path: "./../../public/cause/fonts/otf/Cause-Regular.otf",
			weight: "400",
			style: "normal",
		},
		{
			path: "./../../public/cause/fonts/otf/Cause-Medium.otf",
			weight: "500",
			style: "normal",
		},
		{
			path: "./../../public/cause/fonts/otf/Cause-SemiBold.otf",
			weight: "600",
			style: "normal",
		},
		{
			path: "./../../public/cause/fonts/otf/Cause-Bold.otf",
			weight: "700",
			style: "normal",
		},
		{
			path: "./../../public/cause/fonts/otf/Cause-ExtraBold.otf",
			weight: "800",
			style: "normal",
		},
		{
			path: "./../../public/cause/fonts/otf/Cause-Black.otf",
			weight: "900",
			style: "normal",
		},
	],
	variable: "--font-cause",
	display: "swap",
});
