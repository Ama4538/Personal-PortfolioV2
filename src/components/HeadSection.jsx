import { useState } from 'react'
// Prop is the amount of projects
function HeadSection(props) {
    const navElements = ["Home", "Projects", "About", "Contact"];
    
    return (
        <header id="HomeSection">
            <div className="header-content--primary">
                <h1 className="header-content__title">Kevin Ly</h1>
                {/* About Box */}
                <a className="header-content__about" href="#AboutSection">
                    <div className="primaryHeaderBoxAnimation" ></div>
                </a>
                <div className="header-content__wrapper">
                    {/* Contact Box */}
                    <a className="header-content__contact" href="#ContactSection">
                        <div className="primaryHeaderBoxAnimation" ></div>
                    </a>
                    {/* Resume Box */}
                    <div className="header-content__resume"></div>
                </div>
            </div>

            <div className="header-content--secondary">
                {/* Project Box */}
                <a className="header-content__projects" href="#ProjectsSection">
                    <div className="primaryHeaderBoxAnimation" ></div>
                    {/* Props used to get amount of projects */}
                    <div className='header-content__projectCounter'> {`${props.projectAmount}`} </div>
                    <div className='header-content__projectCounterContainer--Animation'></div>
                </a>
            </div>

            {/* Nav */}
            <nav>
                <ul className="nav__list">
                    {/* Dynamically added navElement to the nav bar */}
                    {navElements.map((element, index) => {
                        return (
                            <li className="nav__item" key={index}>
                                {/* added navigation on click */}
                                <a href={`#${element}Section`}>
                                    {element}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>

        </header>
    )
}


export default HeadSection;