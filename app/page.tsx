"use client"

import Header, { Mode } from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {

	return (
		
		<div>

			<Header mode={Mode.landpage} />

			<Hero />
		</div>
	);
}
