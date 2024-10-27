import { Link, useLocation } from "react-router-dom";

function Header() {
    const current = useLocation().pathname;

    return (
        <header>
            <nav className="header-menu">
                <ul className="header-menu-list">
                    <li className="header-menu-list-item">
                        <Link to="/" className={"header-menu-list-item-link" + (current === "/" ? " current" : "")}>Menu principal</Link>
                    </li>
                    <li className="header-menu-list-item">
                        <Link to="/" className={"header-menu-list-item-link" + (current === "/jeux" ? " current" : "")}>Jeux</Link>
                    </li>
                    <li className="header-menu-list-item">
                        <Link to="/" className={"header-menu-list-item-link" + (current === "/palmares" ? " current" : "")}>Palmarès</Link>
                    </li>
                    <li className="header-menu-list-item">
                        <Link to="/" className={"header-menu-list-item-link" + (current === "/parametres" ? " current" : "")}>Paramètres</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
