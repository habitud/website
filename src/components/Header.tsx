"use client"

import Link from 'next/link';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MoonIcon as MoonIconOutline, SunIcon as SunIconOutline } from '@heroicons/react/24/outline';
import { MoonIcon as MoonIconSolid, SunIcon as SunIconSolid } from '@heroicons/react/20/solid';
import { useState } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { SignInButton } from './SignInButton';
import { useSession } from 'next-auth/react';

/**
 * Enum defining different modes for the Header component.
 */
export enum Mode {

    /**
     * Mode for the landing page.
     */
    landpage,

    /**
     * Mode for the dashboard.
     */
    dashboard
}

/**
 * Props interface for the Header component.
 */
interface Props {

    /**
     * Specifies the mode of the Header component.
     */
    mode: Mode;
}

/**
 * Header component displaying navigation and theme controls.
 *
 * @param props - Props for configuring the Header component.
 * @returns JSX.Element
 */
export default function Header({ mode }: Props): JSX.Element {

    const session = useSession();

    const { theme, setTheme } = useTheme();

    const [isHovered, setIsHovered] = useState(false);

    return (

        <header className='border-b border-border'>

            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">

                <div className="flex lg:flex-1">

                    <Link href="https://habitud.fr" className="-m-1.5 p-1.5">

                        <span className="sr-only">habitud.fr</span>

                        <Image width={40} height={40} className="h-10 w-auto" src="https://www.habitud.fr/logo.svg" alt="logo" />
                    </Link>
                </div>

                <div className="flex lg:flex-1 lg:justify-end">

                    {mode === Mode.landpage ? (

                        <SignInButton text="Passer à l'action" />
                    ) : (

                        <div className='flex items-center gap-4'>

                            {theme === "light" ? (

                                <Button variant="ghost" size="icon" onClick={() => setTheme("dark")} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>

                                    {isHovered ? <SunIconSolid width={24} height={24} /> : <SunIconOutline width={24} height={24} />}
                                </Button>
                            ) : (

                                <Button variant="ghost" size="icon" onClick={() => setTheme("light")} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>

                                    {isHovered ? <MoonIconSolid width={24} height={24} /> : <MoonIconOutline width={24} height={24} />}
                                </Button>
                            )}

                            <Avatar>

                                <AvatarImage src={session?.data?.user?.image || 'https://github.com/shadcn.png'} />


                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
}
