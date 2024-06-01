import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from "react";

// Prop is a array of project objects
function ProjectsSection(props) {
    // State to manage which card is currently flipped
    const [activeIndex, setActiveIndex] = useState([])
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

    // handle the flip status
    function updateActiveStatus(index) {
        setActiveIndex(prevIndexes => {
            // Check if current index is active
            if (prevIndexes.includes(index)) {
                //Remove from active
                return prevIndexes.filter(element => element !== index)
            } else {
                // Added into active
                return [...prevIndexes, index]
            }
        }
        );
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
        }
    }

    return (
        <section
            className="projects"
            id="ProjectsSection"
            ref={ref}
        >
            <motion.h2
                className="projects__title"
                variants={startUp}
                initial="init"
                animate={playAnimation}
                transition={{
                    duration: 0.75,
                }}
            > Projects </motion.h2>
            <motion.div className="projects__container"
                variants={startUp}
                initial="init"
                animate={playAnimation}
                transition={{
                    duration: 1,
                    delay: 0.25
                }}
            >
                {/* Going through each data in the JSON to add project card */}
                {props.projectArray.map((card, index) => {
                    return (
                        <article
                            className={`project-card ${activeIndex.includes(index) ? 'project-card--actived' : 'deactived'}`}
                            key={index}
                            onClick={() => updateActiveStatus(index)}
                        >
                            {/* Front of the card */}
                            <div className="project-card__front" style={{ backgroundImage: `url(projectImage/${card.image})` }}>
                                <h3 className="project-card__title">{card.name}</h3>
                            </div>

                            {/* Back of the card */}
                            <div className="project-card__back" >
                                {/* Div used to managed blur of background */}
                                <div className="project-card__back-blur" style={{ backgroundImage: `url(projectImage/${card.image})` }}></div>
                                <h3 className="project-card__title">{card.name}</h3>
                                <p className="project-card__description">{card.description}</p>
                                <ul className="project-card__tag-wrapper">
                                    {/* Going through tag array to add tag for each card */}
                                    {card.tags.map((tag, index) => {
                                        return <li className="project-card__tag" key={index}> <p> {tag} </p> </li>
                                    })}
                                </ul>
                                <ul className="project-card__link-wrapper" style={{ gridTemplateColumns: card.liveLink != null ? '1fr 1fr' : '1fr' }}>
                                    {/* Determines if live link should be added into card */}
                                    {(card.liveLink != null) && <li> <a className="project-card__link" href={card.liveLink} target="_blank">Live</a></li>}
                                    <li><a className="project-card__link" href={card.codeLink} target="_blank">Code</a> </li>
                                </ul>
                            </div>
                        </article>
                    )
                })}
            </motion.div>
        </section >
    )
}

export default ProjectsSection;