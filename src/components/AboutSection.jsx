import { easeInOut, motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from "react";

function AboutSection() {
    // Used to help initalize the design animation
    const shapesArray = Array.from({ length: 7 })
    const skills = ["Java", "JavaScript", "React", "HTML", "CSS", "C"]

    const ref = useRef(null)
    // Determines if the section is in view
    const inView = useInView(ref, { once: true })
    // Animation controller
    const playAnimation = useAnimation();

    // All possible combination for the shape animation
    const possibleCombination = [
        { configuration: 1, roundness: 1 },
        { configuration: 1, roundness: 4 },
        { configuration: 1, roundness: 5 },
        { configuration: 2, roundness: 1 },
        { configuration: 2, roundness: 3 },
        { configuration: 3, roundness: 1 },
        { configuration: 3, roundness: 2 },
        { configuration: 3, roundness: 5 },
    ]

    // States used to help determine the current configuration
    const [curCombination, setCurCombination] = useState(possibleCombination[0]);
    // States used to help prevent the same animation playing twice in a row
    const [lastCombinationIndex, setLastCombinationIndex] = useState(0);

    // Handle the design animation
    useEffect(() => {
        // Set a interval to determine when to change the configuration
        const interval = setInterval(() => {
            const newCombinationIndex = randomNumGen();
            // update states with new number
            setCurCombination(possibleCombination[newCombinationIndex]);
            setLastCombinationIndex(newCombinationIndex);
        }, 3750)

        // Clear interval on unmount
        return () => clearInterval(interval);
    }, []);

    // Play appearance animation when the section is in view
    useEffect(() => {
        if (inView) {
            playAnimation.start("animation")
        }
    }, [inView])

    // Random number generated used to help generate a unqiue number for possible combination
    function randomNumGen() {
        let randomNum;
        do {
            randomNum = Math.floor(Math.random() * 8);
        } while (randomNum === lastCombinationIndex);
        return randomNum;
    }

    // Default animation
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

    return (
        <section
            className="about"
            id="AboutSection"
            ref={ref}
        >
            <motion.h2
                className="about__title"
                variants={startUp}
                initial="init"
                animate={playAnimation}
            > About Me </motion.h2>

            {/* Content */}
            <article className="about-content--primary">
                <motion.div
                    className="about-content__text-wrapper"
                    variants={startUp}
                    initial="init"
                    animate={playAnimation}
                >
                    <p className="about-content__text">I'm a Computer Science student at George Mason University. When it comes to coding, I love taking big problems and breaking them down into smaller pieces, solving them one by one</p>
                    <p className="about-content__text">I've completed courses in data structures, object-oriented programming, and low-level programming, which have equipped me with a solid foundation in software development. During my free time, I enjoy playing video games, working out, and exploring different programming frameworks and concepts.</p>
                    <p className="about-content__text">In the past, I've worked as a Barista and a Retail Cashier, experiences that have taught me the value of hard work, customer service, and multitasking</p>
                </motion.div>

                {/* Animation */}
                {/* Using data attributes to add different configuration and roundness */}
                <motion.div
                    className="about-content__design-wrapper"
                    data-configuration={`${curCombination.configuration}`}
                    data-roundness={`${curCombination.roundness}`}
                    variants={startUp}
                    initial="init"
                    animate={playAnimation}
                >
                    {/* Adding a div for the length of shapsArray */}
                    {shapesArray.map((shape, index) => {
                        return <div className="about-content__design-shape" key={index}></div>
                    })}
                </motion.div>
            </article>

            {/* Skills */}
            {/* Using skills array to add into container */}
            <ul className="about__skill-container">
                {skills.map((skill, index) => {
                    return <motion.li
                        className="about__skill"
                        key={index}
                        variants={{
                            animation: {
                                y: 0,
                                opacity: 1,
                            }
                        }}
                        initial={{
                            y: -10,
                            opacity: 0,
                        }}
                        animate={playAnimation}
                        transition={{
                            duration: 0.75,
                            delay: 0.5 + index * 0.25,
                            ease: easeInOut,
                        }}
                    > {skill} </motion.li>
                })}
            </ul>
        </section>
    )
}

export default AboutSection;