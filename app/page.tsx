"use client"

import Header, { Mode } from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {

	return (

		<main className="flex-1 flex flex-col">

			<Header mode={Mode.landpage} />

			<Hero />
		</main>
	);
}
