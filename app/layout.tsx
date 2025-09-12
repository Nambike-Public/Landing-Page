import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata = {
	title: "Nambike",
	description:
		"Revolutionizing Social Networking By Bringing, Building & Maintaing Trust",
	icons: {
		icon: [
			{ url: "/favicon.ico", sizes: "any" },
			{ url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
			{ url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
		],
		shortcut: "/favicon.ico",
		apple: "/apple-touch-icon.png",
	},
	manifest: "/manifest.json",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				{children}
				<Analytics />
        <SpeedInsights/>
			</body>
		</html>
	);
}
