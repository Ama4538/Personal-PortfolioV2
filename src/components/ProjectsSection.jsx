import { useState } from "react";

// Prop is a array of project objects
function ProjectsSection(props) {
    // State to manage which card is currently flipped
    const [activeIndex, setActiveIndex] = useState([])

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

    return (
        <section className="projects" id="ProjectsSection">
            <h2 className="projects__title">Projects</h2>
            <div className="projects__container">
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
            </div>
        </section >
    )
}

export default ProjectsSection;