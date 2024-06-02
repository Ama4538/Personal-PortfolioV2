import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from "react";

function Footer() {
    // Reference to the section
    const ref = useRef(null)
    // Determines if the section is in view
    const inView = useInView(ref, { once: true })
    // Animation controller
    const playAnimation = useAnimation();

    // Play animation when the section is in view
    useEffect(() => {
        if (inView) {
            playAnimation.start("animation")
        }
    }, [inView])

    // Default animation
    const startUp = {
        init: {
            y: -2.5,
            opacity: 0,
        },
        animation: {
            y: 0,
            opacity: 1,
        }
    }

    return (
        <footer ref={ref}>
            <ul className="footer-content">
                <motion.li
                    variants={startUp}
                    initial="init"
                    animate={playAnimation}
                    transition={{
                        duration: 0.3,
                    }}
                ><a className="footer-content__links" href="https://www.linkedin.com/in/kevin-ly-6b98ba203/" target="_blank">Linkedin</a></motion.li>
                <motion.li
                    variants={startUp}
                    initial="init"
                    animate={playAnimation}
                    transition={{
                        duration: 0.3,
                        delay: 0.30
                    }}
                ><a className="footer-content__links" href="mailto:voldableprism09@outlook.com" target="_blank">Voldableprism09@Outlook.com</a></motion.li>
                <motion.li
                    variants={startUp}
                    initial="init"
                    animate={playAnimation}
                    transition={{
                        duration: 0.3,
                        delay: 0.60
                    }}
                ><a className="footer-content__links" href="https://github.com/Ama4538?tab=repositories" target="_blank">GitHub</a></motion.li>
            </ul>
        </footer>
    )
}

export default Footer;