function Nav() {
    // Element in the nav bar
    const navElements = ["Home","Projects", "About", "Contact"];

    return (
        <nav>
            <ul className = "nav__list">
                {/* Dynamically added navElement to the nav bar */}
                {navElements.map((element, index) => {
                    return (
                        <li className = "nav__item" key = {index}>
                            {/* added navigation on click */}
                            <a href = {`#${element}Section`}>
                                {element}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    );
}

export default Nav;