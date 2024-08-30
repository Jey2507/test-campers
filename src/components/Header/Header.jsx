import Logo from "../Logo/Logo.jsx";
import css from "../Header/Header.module.css"
import { NavLink } from "react-router-dom";

export default function Header({children}) {
    return (
        <>
            <header>
                <Logo />
                <nav className={css.headerList}>
                    <NavLink className={css.headerItem} to={"/"}> Home </NavLink>
                    <NavLink className={css.headerItem} to={"/catalog"}> Catalog </NavLink>
                </nav>
            </header>
            {children}
        </>
    )
}
