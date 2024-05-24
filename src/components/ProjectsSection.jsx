import { useState } from "react";
import { easeInOut, motion } from "framer-motion";

// Prop is a array of project objects
function ProjectsSection(props) {
    // State to manage which card is currently flipped
    const [activeIndex, setActiveIndex] = useState(null)

    // handle the change in flip status
    function updateActiveStatus(index) {
        setActiveIndex(index === activeIndex ? null : index);
    }

    return (
        <section className="projects" id="ProjectsSection">
            <h2 className="projects__title">Projects</h2>
            <div className="projects__container">
                {/* Going through each data in the JSON to add project card */}
                {props.projectArray.map((card, index) => {
                    return (
                        <motion.div
                            className="project__card"
                            key={index}
                            onClick={() => updateActiveStatus(index)}
                            // Add the flipping animation if index matches active status
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
                            <div className="project__card--back" >
                                {/* Div used to managed blur of background */}
                                <div className="project__card--backBlur" style={{ backgroundImage: `url(projectImage/${card.image})` }}></div>
                                <h3 className="project__card--title">{card.name}</h3>
                                <p className="project__card--description">{card.description}</p>
                                <div className="project__card--tagWrapper">
                                    {/* Going through tag array to add tag for each card */}
                                    {card.tags.map((tag, index) => {
                                        return <div className="project__card--tag"> {tag} </div>
                                    })}
                                </div>
                                <div className="project__card--linkWrapper">
                                    {/* Determines if live link should be added into card */}
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