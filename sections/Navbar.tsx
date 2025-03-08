'use client';

import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NavItems = () => {
    return (
        <ul className="flex flex-col items-center gap-4 sm:flex-row md:gap-6 relative z-20">
            {navLinks.map(({ id, href, name }) => (
                <li key={id} className="text-neutral-400 hover:text-white font-generalsans max-sm:hover:bg-[#3A3A49] max-sm:w-full max-sm:rounded-md py-2 max-sm:px-5">
                    <Link href={href} onClick={() => window.scrollTo(0, 0)} className="text-lg md:text-base hover:text-white transition-colors">
                        {name}
                    </Link>
                </li>
            ))}
        </ul>
    );
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen((prevIsOpen) => !prevIsOpen);
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center py-5 mx-auto sm:px-10 px-5">
                    <Link href={"/"} className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
                        AUD
                    </Link>

                    <button onClick={toggleMenu} className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex" aria-label="Toggle menu">
                        <Image src={isOpen ? '/assets/close.svg' : '/assets/menu.svg'} alt="toggle" width={24} height={24} />
                    </button>

                    <nav className="sm:flex hidden">
                        <NavItems />
                    </nav>
                </div>
            </div>

            <div className={`absolute left-0 right-0 bg-[#0E0E10] backdrop-blur-sm transition-all duration-300 ease-in-out overflow-hidden z-20 mx-auto sm:hidden block ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                <nav className="p-5">
                    <NavItems/>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;