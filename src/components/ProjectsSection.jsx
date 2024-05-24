import { useState } from "react";
import { easeInOut, motion } from "framer-motion";

function ProjectsSection(props) {
    const [activeIndex, setActiveIndex] = useState(null)

    function updateActiveStatus(index) {
        setActiveIndex(index === activeIndex ? null : index);
    }

    return (
        <section className="projects" id="ProjectsSection">
            <h2 className="projects__title">Project</h2>
            <div className="projects__container">
                {props.projectArray.map((card, index) => {
                    return (
                        <motion.div
                            className="project__card"
                            key={index}
                            onClick={() => updateActiveStatus(index)}
                            animate={activeIndex === index ? {
                                transform: `rotate3D(1, 1, 0, 180deg)`
                            } : {
                                transform: `rotate3D(0, 0, 0, 0)`
                            }}
                            transition={{
                                duration: 0.35,
                                ease: easeInOut
                            }}
                        >
                            {/* Front of the card */}
                            <div className="project__card--front" style={{ backgroundImage: `url(projectImage/${card.image})` }}>
                                <h3 className="project__card--title">{card.name}</h3>
                            </div>
                            {/* Back of the card */}
                            <div className="project__card--back">
                                <h3 className="project__card--title">{card.name}</h3>
                                <p className="project__card--description">{card.description}</p>
                                <div className="project__card--tagWrapper">
                                    {card.tags.map((tag, index) => {
                                        return (
                                            <div className="project__card--tag">
                                                {tag}
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className="project__card--linkWrapper">
                                    {(card.liveLink != null) && <a href={card.liveLink} target="_blank">Click to view Live</a>}
                                    <a href={card.codeLink} target="_blank">Click to view code</a>
                                </div>
                            </div>
                        </motion.div>
                    )
                })}
            </div>
        </section >
    )
}

export default ProjectsSection;