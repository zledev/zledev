import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "ZleDev",
	description: "Just a random developer.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
