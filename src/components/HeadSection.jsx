import { useState } from 'react'
import { motion } from "framer-motion"

function HeadSection(props) {
    const navElements = ["Home", "Projects", "About", "Contact"];

    // States to manage animation for each box
    const [background, setBackground] = useState({
        aboutHover: false,
        contactHover: false,
        projectHover: false,
    })

    // inital varient for animation for the all box
    const headerBox = {
        initX: {
            x: '-100%'
        },
        initY: {
            y: '100%'
        },
        transition: {
            duration: 0.25
        }
    }

    // Update states for the animation
    function updateBackground(section, value) {
        setBackground(prev => ({
            ...background,
            [`${section}Hover`]: value
        }))
    }

    return (
        <header id="HomeSection">
            <div className="header-content--primary">
                <h1 className="header-content__title">Kevin Ly</h1>
                {/* About Box */}
                <a
                    className="header-content__about"
                    href="#AboutSection"
                    // Mouse effect for animation control
                    onMouseEnter={() => { updateBackground("about", true) }}
                    onMouseLeave={() => { updateBackground("about", false) }}
                >
                    <motion.div
                        className="primaryHeaderBoxAnimation"
                        variants={headerBox}
                        initial="initX"
                        // Check hover prior to animation
                        animate={background.aboutHover ? { x: 0 } : {}}
                        transition="transition"
                    >
                    </motion.div>
                </a>
                <div className="header-content__wrapper">
                    {/* Contact Box */}
                    <a
                        className="header-content__contact"
                        href="#ContactSection"
                        // Mouse effect for animation control
                        onMouseEnter={() => { updateBackground("contact", true) }}
                        onMouseLeave={() => { updateBackground("contact", false) }}
                    >
                        <motion.div
                            className="primaryHeaderBoxAnimation"
                            variants={headerBox}
                            initial="initX"
                            // Check hover prior to animation
                            animate={background.contactHover ? { x: 0 } : {}}
                            transition="transition"
                        >
                        </motion.div>
                    </a>
                    {/* Resume Box */}
                    <div className="header-content__resume"></div>
                </div>
            </div>

            <div className="header-content--secondary">
                {/* Project Box */}
                <a
                    className="header-content__projects"
                    href="#ProjectsSection"
                    // Mouse effect for animation control
                    onMouseEnter={() => { updateBackground("project", true) }}
                    onMouseLeave={() => { updateBackground("project", false) }}
                >
                    <motion.div
                        className="primaryHeaderBoxAnimation"
                        variants={headerBox}
                        initial="initY"
                        // Check hover prior to animation
                        animate={background.projectHover ? { y: 0 } : {}}
                        transition="transition"
                    >
                    </motion.div>
                    {/* Props used to get amount of projects */}
                    <div className='header-content__projectCounter'> {`${props.projectAmount}`} </div>
                    <motion.div
                        className='header-content__projectCounterContainer--Animation'
                        // Check hover prior to animation
                        animate={background.projectHover ? { scale: 1.1, rotate: 360 } : {}}
                        transition={{ duration: 0.5 }}
                    ></motion.div>
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