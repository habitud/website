import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {

	title: "habitud",
	description: "Application de suivi des habitudes"
};

export default function RootLayout({ children }: PropsWithChildren) {

	const classes: string = cn(inter.className, "min-h-[100vh] flex flex-col")

	return (

		<html lang="fr">

			<body className={classes}>
			
				{children}
			</body>
		</html>
	);
}
