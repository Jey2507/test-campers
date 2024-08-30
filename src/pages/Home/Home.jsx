import { NavLink } from "react-router-dom"
import Header from "../../components/Header/Header.jsx"
import css from "../Home/Home.module.css"

export default function Home() {
    return (
        <Header>
            <div className={css.mainBox}>
                <div className={css.mainDiv}>
                    <div>
                        <h1 className={css.mainTitle}>Campers of your dreams</h1>
                        <p className={css.mainDescr}>You can find everything you want in our catalog</p>
                    </div>
                    <NavLink className={css.headerItem} to={"/catalog"}>
                     <button className={css.mainButton}>View Now</button>
                     </NavLink>
                </div>
            </div>
        </Header>
    )
}