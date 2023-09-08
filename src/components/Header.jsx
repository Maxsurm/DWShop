import React, { useState } from "react";
import { useWindowSize } from "../hooks/useWindowSize";
import { DesktopMenu } from "./DesktopMenu";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MobileMenu } from "./MobileMenu";
import { Cart } from "./Cart";

export const Header = () => {
    const links = [
        { title: "Home", href: "/" },
        { title: "Produits", href: "/produits" },
        { title: "Login", href: "/login" },
        { title: "Contact", href: "/contact" },
    ];
    const { mobile, desktop } = useWindowSize()
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header>
            <div className="container relative mx-auto py-5 flex justify-between border-b-2 border-gray-900 items-center">
                <Cart />
                <div className="flex gap-3 items-center">
                    <img src="../../public/img/logo.svg" alt="Kunaaai" />
                    <h2 className="text-xl font-bold">DwShop</h2>
                </div>
                {/* NAVIGATION  */}
                {/* MENU DESKTOP  */}
                {/* SI ECRAN > 900  */}
                {desktop && <DesktopMenu links={links} />}
                {/* SI ECRAN < 900  */}
                {mobile &&
                    <FontAwesomeIcon
                        onClick={() => setIsOpen(!isOpen)}
                        size="lg"
                        className="absolute right-10"
                        icon={isOpen ? faXmark : faBars} />}
                {/* SI ECRAN < 900 && MENU OUVERT  */}
                {/* MENU MOBILE */}
                {isOpen && mobile ? <MobileMenu links={links} /> : null}
            </div>
        </header>
    );
};