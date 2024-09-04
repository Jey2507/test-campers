import Logo from "../Logo/Logo.jsx";
import css from "../Header/Header.module.css"
import { NavLink } from "react-router-dom";
import clsx from "clsx";

export default function Header({children}) {
    const getNavLinkClassHome = ({ isActive }) => {
        return clsx(css.headerItem, isActive && css.active);
      };
    
    return (
        <>
            <header>
                <Logo />
                <nav className={css.headerList}>
                    <NavLink className={getNavLinkClassHome} to={"/"}> Home </NavLink>
                    <NavLink className={getNavLinkClassHome} to={"/catalog"}> Catalog </NavLink>
                </nav>
            </header>
            {children}
        </>
    )
}
