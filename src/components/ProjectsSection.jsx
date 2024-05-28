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
                        <div
                            className={`project__card ${activeIndex.includes(index) ? 'project__card--actived' : 'deactived'}`}
                            key={index}
                            onClick={() => updateActiveStatus(index)}
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
                                        return <p className="project__card--tag" key={index}> {tag} </p>
                                    })}
                                </div>
                                <div className="project__card--linkWrapper" style={{ gridTemplateColumns: card.liveLink != null ? '1fr 1fr' : '1fr' }}>
                                    {/* Determines if live link should be added into card */}
                                    {(card.liveLink != null) && <a className="project__card--link" href={card.liveLink} target="_blank">Live</a>}
                                    <a className="project__card--link" href={card.codeLink} target="_blank">Code</a>
                                </div>

                            </div>
                        </div>
                    )
                })}
            </div>
        </section >
    )
}

export default ProjectsSection;