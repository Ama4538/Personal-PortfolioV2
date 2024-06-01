import { easeInOut, motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react';

// Prop is the amount of projects
function HeadSection(props) {
    const navElements = ["Home", "Projects", "About"];
    // String used to set help place span for animation
    const title = "Kevin Ly"
    const titleArray = title.split('');
    // Control the title animation
    const playTitle = useAnimation()

    // Default start up animation
    const startUp = {
        init: {
            y: -10,
            opacity: 0,
        },
        animation: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.75
            }
        }
    }

    // Timer for wave animation
    useEffect(() => {
        const titleInterval = setInterval(() => {
            playTitle.start('wave')
        }, 4000);

        return () => clearInterval(titleInterval);
    }, [])

    return (
        <header id="HomeSection">
            <div className="header-content--primary">
                <motion.h1
                    className="header-content__title"
                    variants={startUp}
                    initial="init"
                    animate="animation"
                >
                    {titleArray.map((letter, index) => {
                        {/* Wave Animation */ }
                        return <motion.span
                            key={index}
                            style={{ whiteSpace: 'pre' }}
                            variants={{
                                wave: { y: [0, -12.5, 0] }
                            }}
                            animate={playTitle}
                            transition={{
                                duration: 0.5,
                                delay: 0.5 + index * 0.1,
                                ease: easeInOut
                            }}
                        >{letter}</motion.span>
                    })}
                </motion.h1>

                {/* About Box */}
                <motion.a
                    className="header-content__about"
                    href="#AboutSection"
                    variants={startUp}
                    initial="init"
                    animate="animation"
                ><span>About</span></motion.a>
                <div className="header-content__wrapper">

                    {/* Email Box */}
                    <motion.a
                        className="header-content__email"
                        href="mailto:voldableprism09@outlook.com"
                        target="_blank"
                        variants={startUp}
                        initial="init"
                        animate="animation"
                    ></motion.a>

                    {/* Resume Box */}
                    <motion.a
                        className="header-content__resume"
                        href="/Resume.pdf"
                        target="_blank"
                        variants={startUp}
                        initial="init"
                        animate="animation"
                    > </motion.a>
                </div>
            </div>
            <div className="header-content--secondary">

                {/* Project Box */}
                <motion.a
                    className="header-content__projects"
                    href="#ProjectsSection"
                    variants={startUp}
                    initial="init"
                    animate="animation"
                >
                    <div className='header-content__projects-image'></div>
                    {/* Props used to get amount of projects */}
                    <div className='header-content__projectCounter'>
                        <p> {`${props.projectAmount}`} </p>
                    </div>
                </motion.a>
            </div>

            {/* Nav */}
            <nav>
                <motion.ul
                    className="nav__list"
                    variants={startUp}
                    initial="init"
                    animate="animation"
                >
                    {/* Dynamically added navElement to the nav bar */}
                    {navElements.map((element, index) => {
                        return (
                            // Nav appearing one by one
                            <motion.li
                                className="nav__item"
                                key={index}
                                initial={{
                                    y: -10,
                                    opacity: 0
                                }}
                                animate={{
                                    y: 0,
                                    opacity: 1
                                }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.75 + index * 0.35
                                }}
                            >
                                {/* added navigation on click */}
                                <a className="nav__item-link" href={`#${element}Section`}>
                                    {element}
                                </a>
                            </motion.li>
                        )
                    })}
                </motion.ul>
            </nav>
        </header>
    )
}


export default HeadSection;