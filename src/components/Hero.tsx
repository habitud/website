import Link from "next/link";
import { buttonVariants } from "./ui/button";

/**
 * Hero component displaying introductory content and call-to-action button.
 *
 * @returns JSX.Element
 */
export default function Hero(): JSX.Element {

    return (

        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">

            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            
                <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 dark:text-gray-400 dark:ring-gray-100/20 dark:hover:ring-gray-100/30">
            
                    Lancement de l'application le 01/08/2024 à 18h00.
                </div>
            </div>

            <div className="text-center">

                <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">

                    Suivez vos habitudes en <span className="text-gradient">quelques secondes</span>
                </h1>

                <p className="mt-6 text-lg leading-8 text-foreground">
                    
                    <span className="text-gradient">habitud.fr</span> est une application concue pour vous aider à suivre vos habitudes quotidiennes sans que cela vous prenne plus de quelques secondes par jour.
                </p>

                <div className="mt-10 flex items-center justify-center gap-x-6">

                    <Link href="https://app.habitud.fr" className={buttonVariants({ variant: "black", size: "lg" })}>

                        Passer à l'action
                    </Link>
                </div>
            </div>
        </div>
    );
}
