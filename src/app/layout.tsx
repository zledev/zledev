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
			<body className="text-white bg-green-950">
				{children}</body>
		</html>
	);
}
