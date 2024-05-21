function Nav() {
    const navElements = ["Home","Projects", "About", "Contact"];

    return (
        <nav>
            <ul className = "nav__list">
                {navElements.map((element) => {
                    return <li className = "nav__item" key = {element}>
                        <a>
                            {element}
                        </a>
                    </li>
                })}
            </ul>
        </nav>
    );
}





export default Nav;