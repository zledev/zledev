import type { Metadata } from "next";
import "./globals.css";
import { Cause } from "./fonts";

export const metadata: Metadata = {
	title: "ZleDev",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${Cause.variable} overscroll-none overflow-x-hidden`}>
			<head>
				<meta property="og:title" content="ZleDev"></meta>
				<meta property="og:description" content="A Developer who keep solving problems... Because life never ceases to give us problems, so why not make a career out of it?"></meta>
				<meta property="og:image" content="https://www.zledev.me/zledev.jpg"></meta>
				<meta property="og:url" content="https://www.zledev.me/"></meta>
				<meta property="og:type" content="website"></meta>
			</head>
			<body className="text-white bg-green-950">
				{children}</body>
		</html>
	);
}
