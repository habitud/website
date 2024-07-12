"use client"

import Header, { Mode } from "@/components/Header";
import Hero from "@/components/Hero";
import { SessionProvider } from 'next-auth/react';

export default function Home() {

	return (

		<SessionProvider>

			<Header mode={Mode.landpage} />

			<Hero />
		</SessionProvider>
	);
}
