import { motion } from 'framer-motion'

function Nav() {
    // Element to put on the nav bar dynamically
    const navElements = ["Home", "Projects", "About"];

    // Default start up animation
    const startUp = {
        init: {
            y: -100,
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

    return (
        <motion.nav
            variants={startUp}
            initial="init"
            animate="animation">
            <motion.ul
                className="nav__list"
                variants={startUp}
                initial="init"
                animate="animation"
            >
                {/* added navElement to the nav bar */}
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
                                delay: 1 + index * 0.35
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
        </motion.nav>
    )
}

export default Nav