import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {

	title: "habitud",
	description: "Application de suivi des habitudes"
};

export default function RootLayout({ children }: PropsWithChildren) {

	const classes: string = cn(inter.className, "min-h-[100vh] flex flex-col bg-background")

	return (

		<html lang="fr">

			<body className={classes}>

				<SessionProvider>

					<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>

						{children}
					</ThemeProvider>

				</SessionProvider>
			</body>
		</html>
	);
}
